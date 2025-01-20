"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@sanity/client";

// Create Sanity client with your env variables
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN as string,
  apiVersion: "2024-01-19",
  useCdn: true,
});

interface SearchProduct {
  _id: string;
  title: string;
  productImage: {
    asset: {
      url: string;
    };
  };
}

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchProduct[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearching(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchProducts = useCallback(async () => {
    if (searchQuery.length >= 2) {
      setError(null); // Clear any previous errors
      try {
        const query = `*[_type == "product" && title match $searchQuery] {
          _id,
          title,
          productImage {
            asset->{
              url
            }
          }
        }[0...5]`; // Limit results to 5

        const results = await client.fetch(query, {
          searchQuery: `*${searchQuery}*`,
        });

        setSearchResults(results);
        setIsSearching(true);
      } catch (err) {
        console.error("Error searching products:", err);
        setError("An error occurred while fetching products.");
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => searchProducts(), 300);
    return () => clearTimeout(debounceTimeout);
  }, [searchQuery, searchProducts]);

  return (
    <div className="search-section-container" ref={searchContainerRef}>
      <div className="search-section-input-container">
        <input
          className="search-section-input"
          placeholder="What will you be ordering today?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {isSearching && searchQuery.length >= 2 && (
        <div className="search-results-dropdown">
          {error ? (
            <div className="search-error-message">{error}</div>
          ) : searchResults.length > 0 ? (
            
            searchResults.map((product) => (
              <Link
                key={product._id}
                href={`/product/${product._id}`}
                className="search-result-item"
                onClick={() => {
                  setSearchQuery("");
                  setIsSearching(false);
                }}
              >
                <div className="search-result-image">
                  <Image
                    src={product.productImage.asset.url}
                    alt={product.title}
                    width={50}
                    height={50}
                    className="search-result-product-image"
                    priority // Optimize loading
                  />
                </div>
                <span className="search-result-title">{product.title}</span>
              </Link>
            ))
          ) : (
            <div className="search-no-results">No products found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
