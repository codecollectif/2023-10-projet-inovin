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
  const [tearFludityChecked, setTearFludityChecked] = useState("");

  const getIdTearFluidityChecked = (e) => {
    setTearFludityChecked(parseInt(e.target.id));
  };

  return (
    <section>
      <h2>Fluidité des larmes</h2>
      {tearFludity.map((wine) => (
        <div key={wine.name}>
          <input
            id={wine.id}
            type="checkbox"
            style={{ backgroundColor: wine.color }}
            name={wine.name}
            onChange={(e) => getIdTearFluidityChecked(e)}
            checked={wine.id === tearFludityChecked}
          />
          <label htmlFor={wine.name}>{wine.name}</label>
        </div>
      ))}
    </section>
  );
};

export default TearsFluidity;
