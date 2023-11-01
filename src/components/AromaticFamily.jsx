import { useState } from "react";
import { useWine } from "../contexts/Context";

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

  const { setAromaticFamilies } = useWine();
  const [aromaticFamilyIdChecked, setAromaticFamilyIdChecked] = useState("");
  const aromaticFamilyChecked = sessionStorage.getItem("aromaticFamilies");
  const getIdAromaticFamilyChecked = (e) => {
    setAromaticFamilyIdChecked(parseInt(e.target.id));
    setAromaticFamilies(e.target.name);
    sessionStorage.setItem("aromaticFamilies", e.target.name);
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Familles aromatiques</h2>
      <div className="tasting-div-checkbox">
        {aromaticFamilyWine.map((wine) => (
          <div key={wine.name} className="checkbox-1">
            <input
              id={wine.name}
              type="checkbox"
              name={wine.name}
              onChange={(e) => getIdAromaticFamilyChecked(e)}
              checked={
                wine.id === aromaticFamilyIdChecked ||
                wine.name === aromaticFamilyChecked
              }
            />
            <label htmlFor={wine.name}>{wine.name}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AromaticFamily;
