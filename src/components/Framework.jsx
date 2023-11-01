import { useState } from "react";

const Framework = () => {
  const frameworkWine = [
    {
      id: 0,
      name: "Léger",
    },
    {
      id: 1,
      name: "Fluide",
    },
    {
      id: 2,
      name: "Charpenté",
    },
  ];
  const [frameworkIdChecked, setFrameworkIdChecked] = useState("");
  const frameworkChecked = sessionStorage.getItem("Structure");
  const getIdFrameworkChecked = (e) => {
    setFrameworkIdChecked(parseInt(e.target.id));
    sessionStorage.setItem("Structure", e.target.name);
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Structure</h2>
      <div className="tasting-div-checkbox">
        {frameworkWine.map((wine) => (
          <div key={wine.name} className="checkbox-1">
            <input
              id={wine.name}
              type="checkbox"
              name={wine.name}
              onChange={(e) => getIdFrameworkChecked(e)}
              checked={
                wine.id === frameworkIdChecked || wine.name === frameworkChecked
              }
            />
            <label htmlFor={wine.name}>{wine.name}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Framework;
