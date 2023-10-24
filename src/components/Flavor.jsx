import { useState } from "react";

const Flavor = () => {
  const flavorWine = [
    {
      id: 0,
      name: "Acidité",
    },
    {
      id: 1,
      name: "Amer",
    },
    {
      id: 2,
      name: "Sucre",
    },
    {
      id: 3,
      name: "Gras",
    },
    {
      id: 4,
      name: "Alcool",
    },
    {
      id: 5,
      name: "Autre",
    },
  ];
  const [flavorChecked, setFlavorChecked] = useState("");

  const getIdFlavorChecked = (e) => {
    setFlavorChecked(parseInt(e.target.id));
  };

  return (
    <section>
      <h2>Saveurs</h2>
      {flavorWine.map((wine) => (
        <div key={wine.name}>
          <input
            id={wine.id}
            type="checkbox"
            style={{ backgroundColor: wine.color }}
            name={wine.name}
            onChange={(e) => getIdFlavorChecked(e)}
            checked={wine.id === flavorChecked}
          />
          <label htmlFor={wine.name}>{wine.name}</label>
        </div>
      ))}
    </section>
  );
};

export default Flavor;
