import { useWine } from "../contexts/WineContext";

import Navbar from "../components/Navbar";
import SliderWorkshop from "../components/SliderWorkshop";
import GlassesPicture from "../components/Glasses";

import { Link } from "react-router-dom";

import "./workshop.css";

const Workshop = () => {

  const { dataWine,dataLike, levelWines } = useWine();
/* 
  aromaticFamiliesLike
  aromaticPersistenceLike
  colorIntensityLike
  colorShadeLike
  feelingLike    
  flavorsLike   
  fluidityOfTearsLike 
  frameworkLike 
  intensityOfAromasLike
  shineLike
*/
  
  const dataWineSort = dataWine.sort((a, b) => a - b).reverse();
  const firtWineName = dataWineSort[0].wineName;
  
  console.log(dataLike);
  
  return (
    <>
      <Navbar />
      <section className="workshop-section">
        <h1 className="workshop-title">Atelier de création</h1>
        <div className="workshop-box">
          {dataWine.map((wine) => (
            <div className="workshop-card" key={wine.wineName}>
              <SliderWorkshop wine={wine} maxScore={firtWineName} />
            </div>
          ))}
        </div>
        <p>Volume total {levelWines} ml</p>
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
