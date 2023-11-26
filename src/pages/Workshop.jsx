import { useWine } from "../contexts/WineContext";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import SliderWorkshop from "../components/SliderWorkshop";
import GlassesPicture from "../components/Glasses";

import "./workshop.css";

const Workshop = () => {
  const { dataLikes, levelAllWines } = useWine();

  const firtWineName = dataLikes[0].wineName;

  return (
    <>
      <Navbar />
      <section className="workshop-section">
        <h1 className="workshop-title">Atelier de création</h1>
        <div className="workshop-box">
          {dataLikes.map((wine) => (
            <div className="workshop-card" key={wine.wineName}>
              <SliderWorkshop wine={wine} maxScore={firtWineName} />
            </div>
          ))}
        </div>
        <p>Volume total {levelAllWines} ml</p>
        <div className="workshop-glass">
          <GlassesPicture />
        </div>
        <div className="workshop-link">
          <Link
            to={"/finish"}
            className={levelAllWines === 0 ? "workshop-disable" : "link"}
          >
            Passer à la page de fin
          </Link>
        </div>
      </section>
    </>
  );
};

export default Workshop;
