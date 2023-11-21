import { useState } from "react";
import { useWine } from "../contexts/WineContext";
import { useParams, useRevalidator } from "react-router-dom";

const AromaticPersistence = () => {
  const aromaticPersistenceWine = [
    {
      id: 0,
      name: "Courte",
    },
    {
      id: 1,
      name: "Moyenne",
    },
    {
      id: 2,
      name: "Persistante",
    },
  ];
  const { id } = useParams();
  const revalidator = useRevalidator();
  const { setAromaticPersistence } = useWine();

  const [aromaticPersistenceIdChecked, setAromaticPersistenceIdChecked] =
    useState("");

  const aromaticPersistenceChecked = sessionStorage.getItem(
    `${id}.aromaticPersistence`
  );

  const getIdAromaticPersistenceChecked = (e) => {
    setAromaticPersistenceIdChecked(parseInt(e.target.id));
    setAromaticPersistence(e.target.name);
    sessionStorage.setItem(`${id}.aromaticPersistence`, e.target.name);
    revalidator.revalidate();
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Persistance aromatique</h2>
      <div className="tasting-div-checkbox">
        {aromaticPersistenceWine.map((wine) => (
          <div key={wine.name + "aromaticPersistence"} className="checkbox-1">
            <input
              id={wine.id}
              type="checkbox"
              name={wine.name}
              onChange={(e) => getIdAromaticPersistenceChecked(e)}
              checked={
                wine.id === aromaticPersistenceIdChecked ||
                wine.name === aromaticPersistenceChecked
              }
            />
            <label htmlFor={wine.name}>{wine.name}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AromaticPersistence;
