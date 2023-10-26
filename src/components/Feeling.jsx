import { useState } from "react";

const Feeling = () => {
  const feelingWine = [
    {
      id: 0,
      name: "Franc",
    },
    {
      id: 1,
      name: "Simple",
    },
    {
      id: 2,
      name: "Douteux",
    },
    {
      id: 3,
      name: "Default",
    },
  ];
  const [feelingIdChecked, setFeelingIdChecked] = useState("");
  const feelingChecked = sessionStorage.getItem("Impression");
  const getIdFeelingChecked = (e) => {
    setFeelingIdChecked(parseInt(e.target.id));
    sessionStorage.setItem("Impression", e.target.name);
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Impression</h2>
      <div className="tasting-div-checkbox">
        {feelingWine.map((wine) => (
          <div key={wine.name} className="checkbox-1">
            <input
              id={wine.id}
              type="checkbox"
              style={{ backgroundColor: "#F5F5DC" }}
              name={wine.name}
              onChange={(e) => getIdFeelingChecked(e)}
              checked={
                wine.id === feelingIdChecked || wine.name === feelingChecked
              }
            />
            <label htmlFor={wine.name}>{wine.name}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feeling;
