import { useState, useEffect } from "react";
import { useWine } from "../contexts/WineContext";

import VoidBottle from "../assets/pictures/bouteille-vide.png";
import Bottle1 from "../assets/pictures/bouteille-1-test.png";
import Bottle2 from "../assets/pictures/bouteille-2.png";
import Bottle3 from "../assets/pictures/bouteille-3.png";
import Bottle4 from "../assets/pictures/bouteille-4.png";
import Bottle5 from "../assets/pictures/bouteille-5.png";
import Bottle6 from "../assets/pictures/bouteille-6.png";
import Bottle7 from "../assets/pictures/bouteille-7.png";
import Bottle8 from "../assets/pictures/bouteille-8.png";
import Bottle9 from "../assets/pictures/bouteille-9.png";
import Bottle10 from "../assets/pictures/bouteille-10.png";

import "../pages/score.css";

const Score = () => {
  const { setScore } = useWine();
  const [scoreProgress, setScoreProgress] = useState(1);
  const [imgFilling, setImgFilling] = useState(VoidBottle);

  const handleClick = (e) => {
    setScoreProgress(e.target.id);
    setScore(e.target.id);
    sessionStorage.setItem("score", e.target.id);
  };

  const handleProgress = () => {
    switch (scoreProgress) {
      case "10":
        setImgFilling(Bottle10);
        break;
      case "9":
        setImgFilling(Bottle9);
        break;
      case "8":
        setImgFilling(Bottle8);
        break;
      case "7":
        setImgFilling(Bottle7);
        break;
      case "6":
        setImgFilling(Bottle6);
        break;
      case "5":
        setImgFilling(Bottle5);
        break;
      case "4":
        setImgFilling(Bottle4);
        break;
      case "3":
        setImgFilling(Bottle3);
        break;
      case "2":
        setImgFilling(Bottle2);
        break;
      case "1":
        setImgFilling(Bottle1);
        break;

      case "0":
        setImgFilling(VoidBottle);
        break;

      default:
        setImgFilling(VoidBottle);
        break;
    }
  };
  useEffect(() => {
    handleProgress();
  }, [scoreProgress]);

  return (
    <section className="score-section">
      <h1 className="score-title">La notation</h1>
      <div className="score-div">
        <img
          style={{ borderRadius: "20px" }}
          src={imgFilling}
          alt="remplissage bouteille"
        />
        <div className="score-btn">
          <button className="btn" onClick={(e) => handleClick(e)} id="0">
            0
          </button>
          <button className="btn" onClick={(e) => handleClick(e)} id="1">
            1
          </button>
          <button className="btn" onClick={(e) => handleClick(e)} id="2">
            2
          </button>
          <button className="btn" onClick={(e) => handleClick(e)} id="3">
            3
          </button>
          <button className="btn" onClick={(e) => handleClick(e)} id="4">
            4
          </button>
          <button className="btn" onClick={(e) => handleClick(e)} id="5">
            5
          </button>
          <button className="btn" onClick={(e) => handleClick(e)} id="6">
            6
          </button>
          <button className="btn" onClick={(e) => handleClick(e)} id="7">
            7
          </button>
          <button className="btn" onClick={(e) => handleClick(e)} id="8">
            8
          </button>
          <button className="btn" onClick={(e) => handleClick(e)} id="9">
            9
          </button>
          <button className="btn" onClick={(e) => handleClick(e)} id="10">
            10
          </button>
          <h2>votre note {scoreProgress} /10</h2>
        </div>
      </div>
    </section>
  );
};

export default Score;
