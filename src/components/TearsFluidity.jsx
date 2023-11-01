import { useState } from "react";

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
  const [tearFludityIdChecked, setTearFludityIdChecked] = useState("");
  const tearFludityChecked = sessionStorage.getItem("Fluidité des larmes");
  const getIdTearFluidityChecked = (e) => {
    setTearFludityIdChecked(parseInt(e.target.id));
    sessionStorage.setItem("Fluidité des larmes", e.target.name);
  };

  return (
    <section className="tasting-section-checkbox">
      <h2>Fluidité des larmes</h2>
      <div className="tasting-div-checkbox">
        {tearFludity.map((wine) => (
          <div key={wine.name} className="checkbox-1">
            <input
              id={wine.name}
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
