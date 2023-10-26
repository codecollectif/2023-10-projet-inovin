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
    <section className="tasting-section-checkbox">
      <h2>Brillance</h2>
      <div className="tasting-div-checkbox">
        {shineWine.map((wine) => (
          <div key={wine.name} className="checkbox-1 ">
            <label htmlFor={wine.name}>{wine.name}</label>
            <input
              id={wine.id}
              type="checkbox"
              style={{ backgroundColor: "#F5F5DC" }}
              name={wine.name}
              onChange={(e) => getIdShineChecked(e)}
              checked={wine.id === shineIdChecked || wine.name === shineChecked}
            />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShineWine;
