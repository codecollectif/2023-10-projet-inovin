import { useState } from "react";
import { useWine } from "../contexts/Context";

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

  const { setFlavors } = useWine();
  const [flavorIdChecked, setFlavorIdChecked] = useState("");
  const flavorChecked = sessionStorage.getItem("flavors");
  const getIdFlavorChecked = (e) => {
    setFlavorIdChecked(parseInt(e.target.id));
    setFlavors(e.target.name);
    sessionStorage.setItem("flavors", e.target.name);
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Saveurs</h2>
      <div className="tasting-div-checkbox">
        {flavorWine.map((wine) => (
          <div key={wine.name} className="checkbox-1">
            <input
              id={wine.name}
              type="checkbox"
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
