// Propse come from pranet component star and reviews
// install react-icons dependance...
// if you change the fill color then use FaStar className = color-red

/* eslint-disable */
import { FaStar } from "react-icons/fa";
const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span className="" key={index}>
        {stars >= index + 1 && <FaStar className="text-[1rem]" />}
      </span>
    );
  });

  return (
    <div>
      <div className="flex items-center space-x-1 text-[#FFC700]">
        {ratingStar}
        <p className="text-xs lg:text-sm text-gray-700">
          (<span>{reviews}</span> Star)
        </p>
      </div>
    </div>
  );
};

export default Star;
