import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { GiWineBottle } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useWine } from "../contexts/Context";
import "./score.css";

const Scrore = () => {
  const { setScore } = useWine();
  const params = useParams();
  const [rating, setRating] = useState(50);
  const handleRating = (rate) => {
    setRating(rate);
    setScore(rate);
    sessionStorage.setItem("score", rate);
  };
  return (
    <>
      <Navbar />
      <section className="score-box">
        <h1 className="score-title">La notation</h1>
        <div className="rating">
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
            tooltipDefaultText={sessionStorage.getItem("score") + "/10"}
            transition
            showTooltip
            fillIcon={<GiWineBottle size={38} />}
            emptyIcon={<GiWineBottle size={38} />}
            fillColor="#ac1e44"
            iconsCount={10}
            onClick={handleRating}
            ratingValue={rating}
            emptyColor={"#00000"}
          />
        </div>
        <div className="score-div-link">
          <Link className="link" to={`/${params.id}/gustatif`}>
            Précédent
          </Link>
          <Link className="link" to={`/${params.id}/recapitulatif`}>
            {" "}
            Valider{" "}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Scrore;
