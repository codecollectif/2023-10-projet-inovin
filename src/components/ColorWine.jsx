import { useState } from "react";
import { useWine } from "../contexts/WineContext";
import { useParams, useRevalidator } from "react-router-dom";

import colorsWine from "../assets/datas/colorsWine";

export default function ColorWine() {
  const { id } = useParams();
  const revalidator = useRevalidator();
  const { setName, setColorShade } = useWine();

  const [colorIdChecked, setIdColorChecked] = useState("");

  const colorChecked = sessionStorage.getItem(`${id}.colorShade`);

  const getIdColorChecked = (e) => {
    setColorShade(e.target.name);
    setName(id.ColorShade);
    setIdColorChecked(e.target.name);
    sessionStorage.setItem(`${id}.colorShade`, e.target.name);
    revalidator.revalidate();
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Couleur et nuance</h2>
      <div className="tasting-div-checkbox">
        {colorsWine.map((wine) => (
          <div key={wine.name + "colorShade"} className="checkbox-1">
            <input
              id={wine.name}
              type="checkbox"
              name={wine.name}
              onChange={(e) => getIdColorChecked(e)}
              checked={wine.id === colorIdChecked || wine.name === colorChecked}
            />
            <label htmlFor={wine.name}>{wine.name}</label>
          </div>
        ))}
      </div>
    </section>
  );
}
