import { useState } from "react";
import { useWine } from "../contexts/WineContext";
import { useRevalidator } from "react-router-dom";

const TearsFluidity = () => {
  const tearFludity = [
    {
      id: 0,
      name: "Fines et fluides",
    },
    {
      id: 1,
      name: "Larges et visqueses",
    },
  ];

  const revalidator = useRevalidator();
  const { setFluidityOfTears } = useWine();

  const [tearFludityIdChecked, setTearFludityIdChecked] = useState("");

  const tearFludityChecked = sessionStorage.getItem(`fluidityOfTears`);

  const getIdTearFluidityChecked = (e) => {
    setTearFludityIdChecked(parseInt(e.target.id));
    setFluidityOfTears(e.target.name);
    sessionStorage.setItem(`fluidityOfTears`, e.target.name);
    revalidator.revalidate();
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Fluidité des larmes</h2>
      <div className="tasting-div-checkbox">
        {tearFludity.map((wine) => (
          <div key={wine.name + "fluidityOfTears"} className="checkbox-1">
            <input
              id={wine.id}
              type="checkbox"
              name={wine.name}
              onChange={(e) => getIdTearFluidityChecked(e)}
              checked={
                wine.id === tearFludityIdChecked ||
                wine.name === tearFludityChecked
              }
            />
            <label htmlFor={wine.name}>{wine.name}</label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TearsFluidity;
