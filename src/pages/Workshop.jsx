import { useWine } from "../contexts/WineContext";

import Navbar from "../components/Navbar";
import SliderWorkshop from "../components/SliderWorkshop";
import GlassesPicture from "../components/Glasses";

import { Link } from "react-router-dom";

import "./workshop.css";


const Workshop = () => {
  const { dataWine,dataLikes, levelWines } = useWine();

  const dataWineSort = dataLikes
    //.sort((a, b) => a.countLike - b.countLike)
    
  const firtWineName = dataWineSort[0].wineName;
console.log("test1",dataWine);
console.log("test2",dataLikes);
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
        <p>Volume total {levelWines ?? 125} ml</p>
        <div className="workshop-glass">
          <GlassesPicture />
        </div>
        <div className="workshop-link">
          <Link to={"/finish"} className="link">
            Passer à la page de fin
          </Link>
        </div>
      </section>
    </>
  );
};

export default Workshop;
