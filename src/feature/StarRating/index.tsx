import React from "react";
import Image from "next/image";

interface StarRatingProps {
  rating: number;
  size?: number;
  onlyFullStars?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  size = 32,
  onlyFullStars = false,
}) => {
  const adjustedRating = onlyFullStars
    ? Math.floor(rating)
    : Math.floor(rating * 2) / 2;
  const fullStars = Math.floor(adjustedRating);
  const hasHalfStar = !onlyFullStars && adjustedRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-1">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <Image
            key={`full-${i}`}
            src="/full-star.png"
            alt="Full Star"
            width={size}
            height={size}
          />
        ))}
      {hasHalfStar && (
        <Image
          src="/half-star.png"
          alt="Half Star"
          width={size}
          height={size}
        />
      )}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <Image
            key={`empty-${i}`}
            src="/empty-star.png"
            alt="Empty Star"
            width={size}
            height={size}
          />
        ))}
    </div>
  );
};

export default StarRating;
