import { useState } from "react";

const IntensityColor = () => {
  const intensityColor = [
    {
      id: 0,
      name: "Claire",
    },
    {
      id: 1,
      name: "Moyenne",
    },
    {
      id: 2,
      name: "Trouble",
    },
    {
      id: 3,
      name: "Opaque",
    },
  ];
  const [intensityIdColorChecked, setIntensityIdColorChecked] = useState("");
  const intensityChecked = sessionStorage.getItem("Intensité de la couleur");
  const getIdIntensityColorChecked = (e) => {
    setIntensityIdColorChecked(parseInt(e.target.id));
    sessionStorage.setItem("Intensité de la couleur", e.target.name);
  };

  return (
    <section>
      <h2>Intensité de la couleur</h2>
      {intensityColor.map((wine) => (
        <div key={wine.name}>
          <input
            id={wine.id}
            type="checkbox"
            style={{ backgroundColor: wine.color }}
            name={wine.name}
            onChange={(e) => getIdIntensityColorChecked(e)}
            checked={
              wine.id === intensityIdColorChecked ||
              wine.name === intensityChecked
            }
          />
          <label htmlFor={wine.name}>{wine.name}</label>
        </div>
      ))}
    </section>
  );
};

export default IntensityColor;
