import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Images from './Images';

interface ProductCardProps {
  imgSrc: string | StaticImageData;
  category: string;
  title: string;
  price: [string, string];
  colors: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ imgSrc, category, title, price, colors }) => {
  return (
    <div className="w-full h-[615px] flex flex-col mb-8">
      <div className="relative h-[450px] mb-4 overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-600">{category}</span>
        <h3 className="text-base text-black">{title}</h3>
        <div className="flex gap-2">
          <span className="text-base text-gray-500">${price[0]}</span>
          <span className="text-base text-green-500">${price[1]}</span>
        </div>
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface Product {
  id: number;
  imgSrc: string | StaticImageData;
  category: string;
  title: string;
  price: [string, string];
  colors: string[];
}

const ProductSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      imgSrc: Images.ShopProduct12,
      category: 'Graphic Design',
      title: 'Digital Download Bundle',
      price: ['16.48', '6.48'],
      colors: ['#9BD6DC', '#F8D848', '#E95D5D', '#444444'],
    },
    {
      id: 2,
      imgSrc: Images.ShopProduct11,
      category: 'Graphic Design',
      title: 'Digital Download Bundle',
      price: ['6.48', '16.48'],
      colors: ['#9BD6DC', '#F8D848', '#E95D5D'],
    },
    {
      id: 3,
      imgSrc: Images.ShopProduct7,
      category: 'Graphic Design',
      title: 'Digital Download Bundle',
      price: ['16.48', '6.48'],
      colors: ['#9BD6DC', '#F8D848', '#E95D5D', '#444444'],
    },
    {
      id: 4,
      imgSrc: Images.ShopProduct10,
      category: 'Graphic Design',
      title: 'Digital Download Bundle',
      price: ['16.48', '6.48'],
      colors: ['#9BD6DC', '#F8D848', '#E95D5D'],
    },
    {
      id: 5,
      imgSrc: Images.ShopProduct8,
      category: 'Graphic Design',
      title: 'Digital Download Bundle',
      price: ['16.48', '6.48'],
      colors: ['#9BD6DC', '#F8D848', '#E95D5D', '#444444'],
    },
    {
      id: 6,
      imgSrc: Images.ShopProduct9,
      category: 'Graphic Design',
      title: 'Digital Download Bundle',
      price: ['16.48', '6.48'],
      colors: ['#9BD6DC', '#F8D848', '#E95D5D'],
    },
    {
      id: 7,
      imgSrc: Images.ShopProduct1,
      category: 'Graphic Design',
      title: 'Digital Download Bundle',
      price: ['16.48', '6.48'],
      colors: ['#9BD6DC', '#F8D848', '#E95D5D', '#444444'],
    },
    {
      id: 8,
      imgSrc: Images.ShopProduct2,
      category: 'Graphic Design',
      title: 'Digital Download Bundle',
      price: ['16.48', '6.48'],
      colors: ['#9BD6DC', '#F8D848', '#E95D5D'],
    },
    {
      id: 9,
      imgSrc: Images.ShopProduct3,
      category: 'Illustrations',
      title: 'Creative Art Bundle',
      price: ['20.00', '10.00'],
      colors: ['#FFA07A', '#98FB98', '#DDA0DD', '#4682B4'],
    },
    {
      id: 10,
      imgSrc: Images.ShopProduct4,
      category: 'Illustrations',
      title: 'Premium Sketch Pack',
      price: ['25.00', '15.00'],
      colors: ['#FFD700', '#FF6347', '#7CFC00', '#5F9EA0'],
    },
    {
      id: 11,
      imgSrc: Images.ShopProduct5,
      category: 'Photography',
      title: 'Photo Editing Kit',
      price: ['30.00', '20.00'],
      colors: ['#8A2BE2', '#FF4500', '#2E8B57', '#DAA520'],
    },
    {
      id: 12,
      imgSrc: Images.ShopProduct6,
      category: 'Photography',
      title: 'Professional Camera Presets',
      price: ['50.00', '40.00'],
      colors: ['#FF69B4', '#8B0000', '#00CED1', '#FFDAB9'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;