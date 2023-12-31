import { useEffect, useState } from "react";
import { useWine } from "../contexts/WineContext";

import GlassesVoid from "../assets/pictures/verre.png";
import Glasses2 from "../assets/pictures/verre2.png";
import Glasses3 from "../assets/pictures/verre3.png";
import Glasses4 from "../assets/pictures/verre4.png";
import Glasses5 from "../assets/pictures/verre5.png";
import Glasses6 from "../assets/pictures/verre6.png";
import Glasses7 from "../assets/pictures/verre7.png";
import Glasses8 from "../assets/pictures/verre8.png";
import Glasses9 from "../assets/pictures/verre9.png";
import GlassesFull from "../assets/pictures/verre10.png";

const Glasses = () => {
  const [Glasses, setGlasses] = useState(GlassesVoid);

  const { levelAllWines } = useWine();

  const displayGlasses = () => {
    if (levelAllWines >= 250) {
      setGlasses(GlassesFull);
    } else if (levelAllWines >= 215) {
      setGlasses(Glasses9);
    } else if (levelAllWines >= 180) {
      setGlasses(Glasses8);
    } else if (levelAllWines >= 150) {
      setGlasses(Glasses7);
    } else if (levelAllWines >= 125) {
      setGlasses(Glasses6);
    } else if (levelAllWines >= 100) {
      setGlasses(Glasses5);
    } else if (levelAllWines >= 75) {
      setGlasses(Glasses4);
    } else if (levelAllWines >= 50) {
      setGlasses(Glasses3);
    } else if (levelAllWines >= 25) {
      setGlasses(Glasses2);
    } else if (levelAllWines === 0) {
      setGlasses(GlassesVoid);
    }
  };

  useEffect(() => {
    displayGlasses();
  }, [levelAllWines]);
  return (
    <>
      <img className="workshop-glass-img" src={Glasses} alt="verre de vin" />
    </>
  );
};

export default Glasses;
