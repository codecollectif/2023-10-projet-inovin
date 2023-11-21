import { useState } from "react";
import { useWine } from "../contexts/WineContext";
import { useParams, useRevalidator } from "react-router-dom";

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

  const { id } = useParams();
  const revalidator = useRevalidator();
  const { setFeeling } = useWine();

  const [feelingIdChecked, setFeelingIdChecked] = useState("");

  const feelingChecked = sessionStorage.getItem(`${id}.feeling`);

  const getIdFeelingChecked = (e) => {
    setFeelingIdChecked(parseInt(e.target.id));
    setFeeling(e.target.name);
    sessionStorage.setItem(`${id}.feeling`, e.target.name);
    revalidator.revalidate();
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Impression</h2>
      <div className="tasting-div-checkbox">
        {feelingWine.map((wine) => (
          <div key={wine.name + "feeling"} className="checkbox-1">
            <input
              id={wine.id}
              type="checkbox"
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
