import { useState } from "react";
import { useWine } from "../contexts/WineContext";
import { useParams, useRevalidator } from "react-router-dom";

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

  const { id } = useParams();
  const revalidator = useRevalidator();
  const { setFramework } = useWine();

  const [frameworkIdChecked, setFrameworkIdChecked] = useState("");

  const frameworkChecked = sessionStorage.getItem(`${id}.framework`);

  const getIdFrameworkChecked = (e) => {
    setFrameworkIdChecked(parseInt(e.target.id));
    setFramework(e.target.name);
    sessionStorage.setItem(`${id}.framework`, e.target.name);
    revalidator.revalidate();
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Structure</h2>
      <div className="tasting-div-checkbox">
        {frameworkWine.map((wine) => (
          <div key={wine.name + "framework"} className="checkbox-1">
            <input
              id={wine.id}
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
