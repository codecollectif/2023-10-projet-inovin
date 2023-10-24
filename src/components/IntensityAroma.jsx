import { useState } from "react";

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
  const [intensityAromaChecked, setIntensityAromaChecked] = useState("");

  const getIdIntensityAromaChecked = (e) => {
    setIntensityAromaChecked(parseInt(e.target.id));
  };
  return (
    <section>
      <h2>Intensité des arômes</h2>
      {intensityAromaWine.map((wine) => (
        <div key={wine.name}>
          <input
            id={wine.id}
            type="checkbox"
            style={{ backgroundColor: wine.color }}
            name={wine.name}
            onChange={(e) => getIdIntensityAromaChecked(e)}
            checked={wine.id === intensityAromaChecked}
          />
          <label htmlFor={wine.name}>{wine.name}</label>
        </div>
      ))}
    </section>
  );
};

export default IntensityAroma;
