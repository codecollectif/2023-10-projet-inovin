import { useState } from "react";
import colorsWine from "../assets/datas/colorsWine";
const ColorWine = () => {
  const [ColorChecked, setColorChecked] = useState("");

  const getIdColorChecked = (e) => {
    setColorChecked(parseInt(e.target.id));
  };
  return (
    <section>
      <h2>Couleur et nuance</h2>
      {colorsWine.map((wine) => (
        <div key={wine.name}>
          <input
            id={wine.id}
            type="checkbox"
            style={{ backgroundColor: wine.color }}
            name={wine.name}
            onChange={(e) => getIdColorChecked(e)}
            checked={wine.id === ColorChecked}
          />
          <label style={{ backgroundColor: wine.color }} htmlFor={wine.name}>
            {wine.name}
          </label>
        </div>
      ))}
    </section>
  );
};

export default ColorWine;
