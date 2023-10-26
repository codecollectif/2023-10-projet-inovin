import { useState } from "react";

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
  const [aromaticPersistenceIdChecked, setAromaticPersistenceIdChecked] =
    useState("");
  const aromaticPersistenceChecked = sessionStorage.getItem(
    "Persistance aromatique"
  );
  const getIdAromaticPersistenceChecked = (e) => {
    setAromaticPersistenceIdChecked(parseInt(e.target.id));
    sessionStorage.setItem("Persistance aromatique", e.target.name);
  };
  return (
    <section className="tasting-section-checkbox">
      <h2>Persistance aromatique</h2>
      <div className="tasting-div-checkbox">
        {aromaticPersistenceWine.map((wine) => (
          <div key={wine.name} className="checkbox-1">
            <input
              id={wine.id}
              type="checkbox"
              style={{ backgroundColor: "#F5F5DC" }}
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
