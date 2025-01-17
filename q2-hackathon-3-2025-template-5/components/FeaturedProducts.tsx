// FeaturedProducts.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { client } from '../sanity/lib/client';

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
  dicountPercentage,
}) => {
  const router = useRouter();
  const discountedPrice = dicountPercentage
    ? price * (1 - dicountPercentage / 100)
    : price;

  const defaultColors = ['#9BD6DC', '#F8D848', '#E95D5D', '#444444'];

  return (
    <div
      className="w-[241px] h-[615px] flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => router.push(`/product/${_id}`)}
    >
      <div className="relative h-[450px] mb-4 overflow-hidden">
        <Image
          src={productImage}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="241px"
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
            {defaultColors
              .slice(0, Math.min(tags.length || 1, defaultColors.length))
              .map((color, index) => (
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

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product"][0...8] {
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
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center gap-4 mb-16 text-center">
        <h2 className="text-3xl font-medium text-black">Featured Products</h2>
        <h2 className="text-4xl font-bold text-black">Bestseller Products</h2>
        <h3 className="text-sm text-gray-600 max-w-md">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </h3>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex justify-between flex-wrap sm:flex-col md:flex-row">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>

        <div className="flex justify-between flex-wrap sm:flex-col md:flex-row">
          {products.slice(4, 8).map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
