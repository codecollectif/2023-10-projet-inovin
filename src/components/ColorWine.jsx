import { useState } from "react";
import colorsWine from "../assets/datas/colorsWine";

export default function ColorWine() {
  const [colorIdChecked, setIdColorChecked] = useState("");
  const colorChecked = sessionStorage.getItem("Couleur et nuance");
  const getIdColorChecked = (e) => {
    setIdColorChecked(parseInt(e.target.id));
    sessionStorage.setItem("Couleur et nuance", e.target.name);
  };
  console.log("colorwine", colorChecked);
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
            checked={wine.id === colorIdChecked || wine.name === colorChecked}
          />
          <label style={{ backgroundColor: wine.color }} htmlFor={wine.name}>
            {wine.name}
          </label>
        </div>
      ))}
    </section>
  );
}
