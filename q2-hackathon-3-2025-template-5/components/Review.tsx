'use client'

import { useState, FormEvent } from 'react';
import { UserCircle, Send, Star, ThumbsUp, Reply, MoreHorizontal } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  content: string;
  rating: number;
  likes: number;
  timestamp: string;
}

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      author: "John Doe",
      content: "Amazing product! The quality is outstanding and delivery was quick.",
      rating: 5,
      likes: 5,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Good product but could be better. The size runs a bit small.",
      rating: 4,
      likes: 3,
      timestamp: "1 hour ago"
    },
    {
      id: 3,
      author: "Mike Johnson",
      content: "Decent quality for the price. Shipping was fast.",
      rating: 3,
      likes: 2,
      timestamp: "30 minutes ago"
    }
  ]);

  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleReviewSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newReview.trim() || rating === 0) return;

    const review: Review = {
      id: reviews.length + 1,
      author: "Current User",
      content: newReview,
      rating: rating,
      likes: 0,
      timestamp: "Just now"
    };

    setReviews([...reviews, review]);
    setNewReview("");
    setRating(0);
  };

  const StarRating = ({ filled, hovered }: { filled: boolean; hovered: boolean }) => (
    <Star
      className={`w-6 h-6 ${
        filled 
          ? 'text-yellow-400 fill-yellow-400' 
          : hovered 
            ? 'text-yellow-200 fill-yellow-200' 
            : 'text-gray-300'
      }`}
    />
  );

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Product Reviews</h2>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarRating
                key={star}
                filled={star <= averageRating}
                hovered={false}
              />
            ))}
          </div>
          <span className="text-lg font-semibold">
            {averageRating.toFixed(1)} out of 5
          </span>
          <span className="text-gray-500">
            ({reviews.length} reviews)
          </span>
        </div>
      </div>

      {/* Review Form */}
      <form onSubmit={handleReviewSubmit} className="mb-8">
        <div className="flex gap-4">
          <UserCircle className="w-10 h-10 text-gray-400" />
          <div className="flex-1">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Your Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                  >
                    <StarRating
                      filled={star <= (hoveredRating || rating)}
                      hovered={star <= hoveredRating}
                    />
                  </button>
                ))}
              </div>
            </div>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              className="w-full p-4 border rounded-lg resize-none h-24"
              placeholder="Write your review..."
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={rating === 0}
                className={`flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg ${
                  rating === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
                }`}
              >
                <Send className="w-4 h-4" />
                Post Review
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="flex gap-4">
            <UserCircle className="w-10 h-10 text-gray-400" />
            <div className="flex-1">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{review.author}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarRating
                            key={star}
                            filled={star <= review.rating}
                            hovered={false}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        {review.timestamp}
                      </span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-700">{review.content}</p>
              </div>
              <div className="flex gap-4 mt-2 text-sm text-gray-500">
                <button className="flex items-center gap-1 hover:text-gray-700">
                  <ThumbsUp className="w-4 h-4" />
                  {review.likes}
                </button>
                <button className="flex items-center gap-1 hover:text-gray-700">
                  <Reply className="w-4 h-4" />
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;