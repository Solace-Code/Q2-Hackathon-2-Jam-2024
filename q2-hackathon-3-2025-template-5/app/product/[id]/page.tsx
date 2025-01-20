// app/product/[id]/page.tsx
"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar'; // Make sure the path is correct
import ResponsiveNavbar from '../../../components/ResponsiveNavbar';
import { useCart } from '../../../components/CartContext';
import Reviews from "../../../components/Review";


interface Product {
  _id: string;
  productImage: string;
  title: string;
  price: number;
  description: string;
  tags: string[];
  dicountPercentage?: number;
  isNew?: boolean;
}

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const query = `*[_type == "product" && _id == $id][0] {
          _id,
          title,
          price,
          "productImage": productImage.asset->url,
          description,
          tags,
          dicountPercentage,
          isNew
        }`;
        const data: Product | null = await client.fetch(query, { id: params.id });
        if (!data) {
          throw new Error("Product not found");
        }
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-[60vh]">
          <div className="text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  const discountedPrice = product.dicountPercentage
    ? product.price * (1 - product.dicountPercentage / 100)
    : product.price;

    const handleAddToCart = () => {
      if (product) {
        addToCart(product);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000); // Reset notification after 2 seconds
      }
    };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Navbar Section */}
      <section className="navbar-section mb-8">
        <Navbar />
      </section>

      <section className="responsive-navbar-section">
      <ResponsiveNavbar/>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-[600px]">
          <Image
            src={product.productImage}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {product.isNew && (
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full">
              New
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          
          <div className="flex gap-4 items-center">
            {product.dicountPercentage ? (
              <>
                <span className="text-2xl text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-3xl text-green-500">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                  {product.dicountPercentage}% OFF
                </span>
              </>
            ) : (
              <span className="text-3xl">${product.price.toFixed(2)}</span>
            )}
          </div>

          <div className="flex gap-2">
            {product.tags.map((tag, index) => (
              <span
                key={`tag-${index}`}
                className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors w-full md:w-auto"
            >
              Add to Cart
            </button>
            {addedToCart && (
              <span className="text-green-500 ml-2">Added to cart!</span>
            )}
          </div>
        </div>
      </div>
      <Reviews/>
    </div>
  );
}
