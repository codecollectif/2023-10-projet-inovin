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
  const [intensityAromaIdChecked, setIntensityAromaIdChecked] = useState("");
  const intensityAromaChecked = sessionStorage.getItem("Intensité des arômes");
  const getIdIntensityAromaChecked = (e) => {
    setIntensityAromaIdChecked(parseInt(e.target.id));
    sessionStorage.setItem("Intensité des arômes", e.target.name);
  };
  return (
    <section className="tasting-section-checkbox">
      <h2>Intensité des arômes</h2>
      <div className="tasting-div-checkbox">
        {intensityAromaWine.map((wine) => (
          <div key={wine.name} className="checkbox-1">
            <input
              id={wine.id}
              type="checkbox"
              style={{ backgroundColor: "#F5F5DC" }}
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
