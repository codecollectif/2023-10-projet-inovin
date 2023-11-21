import { useState } from "react";
import { useWine } from "../contexts/WineContext";
import { useParams, useRevalidator } from "react-router-dom";

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

  const { id } = useParams();
  const revalidator = useRevalidator();
  const { setShine } = useWine();

  const [shineIdChecked, setShineIdChecked] = useState("");

  const shineChecked = sessionStorage.getItem(`${id}.shine`);
  const getIdShineChecked = (e) => {
    setShineIdChecked(parseInt(e.target.id));
    setShine(e.target.name);
    sessionStorage.setItem(`${id}.shine`, e.target.name);
    revalidator.revalidate();
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Brillance</h2>
      <div className="tasting-div-checkbox">
        {shineWine.map((wine) => (
          <div key={wine.name + "shine"} className="checkbox-1 ">
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
