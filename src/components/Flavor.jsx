import { useState } from "react";
import { useWine } from "../contexts/WineContext";
import { useRevalidator } from "react-router-dom";

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

  const revalidator = useRevalidator();
  const { setFlavors } = useWine();

  const [flavorIdChecked, setFlavorIdChecked] = useState("");

  const flavorChecked = sessionStorage.getItem(`flavors`);

  const getIdFlavorChecked = (e) => {
    setFlavorIdChecked(parseInt(e.target.id));
    setFlavors(e.target.name);
    sessionStorage.setItem(`flavors`, e.target.name);
    revalidator.revalidate();
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Saveurs</h2>
      <div className="tasting-div-checkbox">
        {flavorWine.map((wine) => (
          <div key={wine.name + "flavors"} className="checkbox-1">
            <input
              id={wine.id}
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
