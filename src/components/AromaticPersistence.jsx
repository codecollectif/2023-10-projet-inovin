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
  const [aromaticPersistenceChecked, setAromaticPersistenceChecked] =
    useState("");

  const getIdAromaticPersistenceChecked = (e) => {
    setAromaticPersistenceChecked(parseInt(e.target.id));
  };
  return (
    <section>
      <h2>Persistance aromatique</h2>
      {aromaticPersistenceWine.map((wine) => (
        <div key={wine.name}>
          <input
            id={wine.id}
            type="checkbox"
            style={{ backgroundColor: wine.color }}
            name={wine.name}
            onChange={(e) => getIdAromaticPersistenceChecked(e)}
            checked={wine.id === aromaticPersistenceChecked}
          />
          <label htmlFor={wine.name}>{wine.name}</label>
        </div>
      ))}
    </section>
  );
};

export default AromaticPersistence;
