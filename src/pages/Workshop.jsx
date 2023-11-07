import React from "react";
import GlassesVoid from "../assets/pictures/verre.png";
import SliderWorkshop from "../components/SliderWorkshop";
import { useWine } from "../contexts/WineContext";

const Workshop = () => {
  const { dataWine } = useWine();
  console.log("0", dataWine);
  //const wineList = dataWine.map((o) => o);
  //console.log("1", wineList);
  return (
    <section>
      <div>
        <h1>Atelier de création </h1>
        {dataWine.map((wine) => (
          <div key={wine.wineName}>
            <SliderWorkshop wine={wine} />
          </div>
        ))}
      </div>
      <div>
        <img src={GlassesVoid} alt="verre vide" />
      </div>
    </section>
  );
};

export default Workshop;
