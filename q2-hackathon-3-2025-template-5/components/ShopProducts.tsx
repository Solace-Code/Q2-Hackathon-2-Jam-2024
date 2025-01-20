'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { client } from '../sanity/lib/client';
import Image from 'next/image';

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

const ProductCard: React.FC<Product> = ({
  _id,
  productImage,
  title,
  price,
  tags,
  isNew,
  dicountPercentage
}) => {
  const router = useRouter(); // Initialize useRouter
  const discountedPrice = dicountPercentage 
    ? price * (1 - dicountPercentage / 100) 
    : price;

  const defaultColors = ["#9BD6DC", "#F8D848", "#E95D5D", "#444444"];

  return (
    <div 
      className="w-full h-[615px] flex flex-col mb-8 cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => router.push(`/product/${_id}`)} // Add navigation on click
    >
      <div className="relative h-[450px] mb-4 overflow-hidden">
        <Image
          src={productImage}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        {isNew && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded">
            New
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-600">{tags[0] || 'Uncategorized'}</span>
        <h3 className="text-base text-black">{title}</h3>
        <div className="flex gap-2">
          {dicountPercentage ? (
            <>
              <span className="text-base text-gray-500 line-through">${price.toFixed(2)}</span>
              <span className="text-base text-green-500">${discountedPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-base text-black">${price.toFixed(2)}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {defaultColors.slice(0, Math.min(tags.length || 1, defaultColors.length)).map((color, index) => (
              <div
                key={`color-${index}`}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={`tag-${index}`}
                className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const query = `*[_type == "product"][0...12] {
          _id,
          title,
          price,
          "productImage": productImage.asset->url,
          description,
          tags,
          dicountPercentage,
          isNew
        }`;
        const data: Product[] = await client.fetch(query);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load shop products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading shop products...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ShopProducts;
