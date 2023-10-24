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
  const [frameworkChecked, setFrameworkChecked] = useState("");

  const getIdFrameworkChecked = (e) => {
    setFrameworkChecked(parseInt(e.target.id));
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
            checked={wine.id === frameworkChecked}
          />
          <label htmlFor={wine.name}>{wine.name}</label>
        </div>
      ))}
    </section>
  );
};

export default Framework;
