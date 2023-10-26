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
  const [flavorIdChecked, setFlavorIdChecked] = useState("");
  const flavorChecked = sessionStorage.getItem("Saveurs");
  const getIdFlavorChecked = (e) => {
    setFlavorIdChecked(parseInt(e.target.id));
    sessionStorage.setItem("Saveurs", e.target.name);
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Saveurs</h2>
      <div className="tasting-div-checkbox">
        {flavorWine.map((wine) => (
          <div key={wine.name} className="checkbox-1">
            <input
              id={wine.id}
              type="checkbox"
              style={{ backgroundColor: "#F5F5DC" }}
              name={wine.name}
              onChange={(e) => getIdFlavorChecked(e)}
              checked={
                wine.id === flavorIdChecked || wine.name === flavorChecked
              }
            />
            <label htmlFor={wine.name}>{wine.name}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Flavor;
