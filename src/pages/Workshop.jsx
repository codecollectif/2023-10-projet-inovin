import { useWine } from "../contexts/WineContext";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import SliderWorkshop from "../components/SliderWorkshop";
import GlassesPicture from "../components/Glasses";

import "./workshop.css";

const Workshop = () => {
  const { dataLikes, levelAllWines } = useWine();

  const wineFilter = dataLikes.filter((like) => like.countLike === 10);

  return (
    <>
      <Navbar />
      <section className="workshop-section">
        <h1 className="workshop-title">Atelier de création</h1>
        <div className="workshop-box">
          {dataLikes.map((wine) => (
            <div className="workshop-card" key={wine.wineName}>
              <SliderWorkshop wine={wine} maxScore={wineFilter[0].wineName} />
            </div>
          ))}
        </div>
        <p>Volume total {levelAllWines} ml</p>
        <div className="workshop-glass">
          <GlassesPicture />
        </div>
        <div className="workshop-link">
          <Link to={"/finish"} className={"link"}>
            Passer à la page de fin
          </Link>
        </div>
      </section>
    </>
  );
};

export default Workshop;
