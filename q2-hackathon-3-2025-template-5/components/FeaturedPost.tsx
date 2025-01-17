import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Icons from "./Icons"; // Importing Icons component
import Images from './Images'; // Update the path to your Images file

// Post interface to handle both string and StaticImageData for images
interface Post {
  id: number;
  image: string | StaticImageData;
  tag: string;
  title: string;
  description: string;
  date: string;
  comments: string;
}

// PostCard component
const PostCard: React.FC<Post> = ({ image, tag, title, description, date, comments }) => {
  return (
    <div className="w-[328px] h-[606px] flex flex-col">
      {/* Image Section */}
      <div className="relative h-[300px] w-full mb-4">
        <div className="absolute top-3 left-3 z-10 bg-[#E74040] text-white px-2.5 py-1 text-sm">NEW</div>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover" 
          sizes="328px" 
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-4 flex-grow">
        <div className="flex gap-4 text-sm text-[#737373] mb-2">
          <span>{tag}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#252B42]">{title}</h3>
        <p className="text-sm text-[#737373] mb-4 flex-grow">{description}</p>
        <div className="flex justify-between items-center text-sm text-[#737373]">
          <div className="flex items-center gap-2">
            {Icons.clock} {/* Replaced calendar Image with Icons.clock */}
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            {Icons.chart} {/* Replaced comments Image with Icons.chart */}
            <span>{comments} comments</span>
          </div>
        </div>
        <button className="text-sm text-[#737373] mt-4 flex items-center gap-2">
          Learn More
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

// FeaturedPosts component
const FeaturedPosts: React.FC = () => {
  const posts: Post[] = [
    {
      id: 1,
      image: Images.Featured1, // Local image import
      tag: "Google",
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10"
    },
    {
      id: 2,
      image: Images.Featured2, // Local image import
      tag: "Trending",
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10"
    },
    {
      id: 3,
      image: Images.Featured3, // Local image import
      tag: "New",
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 mb-16 text-center">
        <span className="text-sm font-normal text-[#737373]">Practice Advice</span>
        <h2 className="text-[40px] font-bold text-[#252B42]">Featured Posts</h2>
        <p className="text-sm text-[#737373] max-w-[470px]">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Posts Container */}
      <div className="flex justify-between max-w-[1050px] mx-auto gap-6 flex-wrap">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
