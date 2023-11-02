import { useState } from "react";
import { useWine } from "../contexts/WineContext";

const ShineWine = () => {
  const shineWine = [
    {
      id: 0,
      name: "étincelante",
    },
    {
      id: 1,
      name: "éclatante",
    },
  ];

  const { setShine } = useWine();
  const [shineIdChecked, setShineIdChecked] = useState("");
  const shineChecked = sessionStorage.getItem("shine");
  const getIdShineChecked = (e) => {
    setShineIdChecked(parseInt(e.target.id));
    setShine(e.target.name);
    sessionStorage.setItem("shine", e.target.name);
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Brillance</h2>
      <div className="tasting-div-checkbox">
        {shineWine.map((wine) => (
          <div key={wine.name} className="checkbox-1 ">
            <input
              id={wine.id}
              type="checkbox"
              name={wine.name}
              onChange={(e) => getIdShineChecked(e)}
              checked={wine.id === shineIdChecked || wine.name === shineChecked}
            />
            <label htmlFor={wine.name}>{wine.name}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShineWine;
