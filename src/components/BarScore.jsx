import { useState } from "react";
import { Rating } from 'react-simple-star-rating'
import { GiWineBottle } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";

const BarScore = () => {
  const params = useParams();
  const[rating, setRating]=useState(50)
  const handleRating=(rate) => {
    setRating(rate)
    sessionStorage.setItem("score", rate);
  }
  return (
    <>
      <h1>La notation V3</h1>
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
      tooltipDefaultText={sessionStorage.getItem("score")+"/10"}
      transition
      showTooltip
      fillIcon={<GiWineBottle size={38}/>}
      emptyIcon={<GiWineBottle size={38}/>}
      fillColor="#ac1e44"
      iconsCount={10}
      onClick={handleRating}
      ratingValue={rating}
      />
      <Link to={`/${params.id}/recapitulatif`}> Valider </Link>
    </>
  );
};

export default BarScore;