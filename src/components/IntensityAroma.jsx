import { useState } from "react";
import { useWine } from "../contexts/WineContext";
import { useRevalidator } from "react-router-dom";

const IntensityAroma = () => {
  const intensityAromaWine = [
    {
      id: 0,
      name: "Faible, vin fermé",
    },
    {
      id: 1,
      name: "Moyenne",
    },
    {
      id: 2,
      name: "Forte, vin ouvert",
    },
  ];

  const revalidator = useRevalidator();
  const { setIntensityOfAromas } = useWine();

  const [intensityAromaIdChecked, setIntensityAromaIdChecked] = useState("");

  const intensityAromaChecked = sessionStorage.getItem(`intensityOfAromas`);

  const getIdIntensityAromaChecked = (e) => {
    setIntensityAromaIdChecked(parseInt(e.target.id));
    setIntensityOfAromas(e.target.name);
    sessionStorage.setItem(`intensityOfAromas`, e.target.name);
    revalidator.revalidate();
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Intensité des arômes</h2>
      <div className="tasting-div-checkbox">
        {intensityAromaWine.map((wine) => (
          <div key={wine.name + "intensityOfAromas"} className="checkbox-1">
            <input
              id={wine.id}
              type="checkbox"
              name={wine.name}
              onChange={(e) => getIdIntensityAromaChecked(e)}
              checked={
                wine.id === intensityAromaIdChecked ||
                wine.name === intensityAromaChecked
              }
            />
            <label htmlFor={wine.name}>{wine.name}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntensityAroma;
