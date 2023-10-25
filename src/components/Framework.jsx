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
    <section>
      <h2>Structure</h2>
      {frameworkWine.map((wine) => (
        <div key={wine.name}>
          <input
            id={wine.id}
            type="checkbox"
            style={{ backgroundColor: wine.color }}
            name={wine.name}
            onChange={(e) => getIdFrameworkChecked(e)}
            checked={
              wine.id === frameworkIdChecked || wine.name === frameworkChecked
            }
          />
          <label htmlFor={wine.name}>{wine.name}</label>
        </div>
      ))}
    </section>
  );
};

export default Framework;
