import { useState } from "react";

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
  const [shineIdChecked, setShineIdChecked] = useState("");
  const shineChecked = sessionStorage.getItem("Brillance");
  const getIdShineChecked = (e) => {
    setShineIdChecked(parseInt(e.target.id));
    sessionStorage.setItem("Brillance", e.target.name);
  };

  return (
    <section>
      <h2>Brillance</h2>
      {shineWine.map((wine) => (
        <div key={wine.name}>
          <input
            id={wine.id}
            type="checkbox"
            style={{ backgroundColor: wine.color }}
            name={wine.name}
            onChange={(e) => getIdShineChecked(e)}
            checked={wine.id === shineIdChecked || wine.name === shineChecked}
          />
          <label htmlFor={wine.name}>{wine.name}</label>
        </div>
      ))}
    </section>
  );
};

export default ShineWine;
