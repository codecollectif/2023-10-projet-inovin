import { useState } from "react";

const AromaticFamily = () => {
  const aromaticFamilyWine = [
    {
      id: 0,
      name: "Fruits",
    },
    {
      id: 1,
      name: "Fleurs",
    },
    {
      id: 2,
      name: "Epices",
    },
    {
      id: 3,
      name: "Végétaux",
    },
    {
      id: 4,
      name: "Empyreumatiques",
    },
    {
      id: 5,
      name: "Animal",
    },
    {
      id: 6,
      name: "Défauts",
    },
  ];
  const [aromaticFamilyChecked, setAromaticFamilyChecked] = useState("");

  const getIdAromaticFamilyChecked = (e) => {
    setAromaticFamilyChecked(parseInt(e.target.id));
  };

  return (
    <section>
      <h2>Familles aromatiques</h2>
      {aromaticFamilyWine.map((wine) => (
        <div key={wine.name}>
          <input
            id={wine.id}
            type="checkbox"
            style={{ backgroundColor: wine.color }}
            name={wine.name}
            onChange={(e) => getIdAromaticFamilyChecked(e)}
            checked={wine.id === aromaticFamilyChecked}
          />
          <label htmlFor={wine.name}>{wine.name}</label>
        </div>
      ))}
    </section>
  );
};

export default AromaticFamily;
