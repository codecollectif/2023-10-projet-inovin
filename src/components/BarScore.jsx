import { useState } from "react";
import { Rating } from 'react-simple-star-rating'
import { GiWineBottle } from "react-icons/gi";

const BarScore = () => {
  const[rating, setRating]=useState(0)
  const handleRating=(rate) => {
    setRating(rate)
  }
  return (
    <>
      <Rating
      tooltipArray={[
        "1/10",
        "2/10",
        "3/10",
        "4/10",
        "5/10",
        "6/10",
        "7/10",
        "8/10",
        "9/10",
        "10/10",
      ]}
      tooltipDefaultText={"Votre score/10"}
      transition
      showTooltip
      fillIcon={<GiWineBottle size={38}/>}
      emptyIcon={<GiWineBottle size={38}/>}
      fillColor="#ac1e44"
      iconsCount={10}
      onClick={handleRating}
      ratingValue={rating}
      />
    </>
  );
};

export default BarScore;