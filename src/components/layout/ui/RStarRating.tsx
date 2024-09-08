import { FaStar, FaRegStar } from "react-icons/fa";

const RStarRating = ({ value }: { value: string | number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= Number(value) ? (
            <FaStar className="text-accentColor" />
          ) : (
            <FaRegStar className="text-accentColor" />
          )}
        </span>
      ))}
    </div>
  );
};

export default RStarRating;
