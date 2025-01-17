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
    <div className="w-[241px] h-[615px] flex flex-col">
      <div className="relative h-[450px] mb-4 overflow-hidden">
        <Image 
          src={imgSrc}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="241px"
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
      imgSrc: Images.Product1,
      category: "Graphic Design",
      title: "Digital Download Bundle",
      price: ["16.48", "6.48"],
      colors: ["#9BD6DC", "#F8D848", "#E95D5D", "#444444"]
    },
    {
      id: 2,
      imgSrc: Images.Product2,
      category: "Graphic Design",
      title: "Digital Download Bundle",
      price: ["6.48", "16.48"],
      colors: ["#9BD6DC", "#F8D848", "#E95D5D"]
    },
    {
      id: 3,
      imgSrc: Images.Product3,
      category: "Graphic Design",
      title: "Digital Download Bundle",
      price: ["16.48", "6.48"],
      colors: ["#9BD6DC", "#F8D848", "#E95D5D", "#444444"]
    },
    {
      id: 4,
      imgSrc: Images.Product4,
      category: "Graphic Design",
      title: "Digital Download Bundle",
      price: ["16.48", "6.48"],
      colors: ["#9BD6DC", "#F8D848", "#E95D5D"]
    },
    {
      id: 5,
      imgSrc: Images.Product5,
      category: "Graphic Design",
      title: "Digital Download Bundle",
      price: ["16.48", "6.48"],
      colors: ["#9BD6DC", "#F8D848", "#E95D5D", "#444444"]
    },
    {
      id: 6,
      imgSrc: Images.Product6,
      category: "Graphic Design",
      title: "Digital Download Bundle",
      price: ["16.48", "6.48"],
      colors: ["#9BD6DC", "#F8D848", "#E95D5D"]
    },
    {
      id: 7,
      imgSrc: Images.Product7,
      category: "Graphic Design",
      title: "Digital Download Bundle",
      price: ["16.48", "6.48"],
      colors: ["#9BD6DC", "#F8D848", "#E95D5D", "#444444"]
    },
    {
      id: 8,
      imgSrc: Images.Product8,
      category: "Graphic Design",
      title: "Digital Download Bundle",
      price: ["16.48", "6.48"],
      colors: ["#9BD6DC", "#F8D848", "#E95D5D"]
    }
  ];

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
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="flex justify-between flex-wrap sm:flex-col md:flex-row">
          {products.slice(4, 8).map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
