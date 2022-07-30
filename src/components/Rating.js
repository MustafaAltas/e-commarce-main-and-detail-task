import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "./style/rating.css";


function Rating({ rating ,reviews}) {
  const ArrayStars = Array.from({ length: 5 }, (__, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <BsStarFill />
        ) : rating >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className="stars">
        {ArrayStars}
        <p>({reviews} Reviews)</p>
    </div>
  )
}

export default Rating;
