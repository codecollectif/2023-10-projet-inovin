import { useState } from "react";
import { useWine } from "../contexts/WineContext";

const SelectCepage = (props) => {
  const { startWines, setStartWines } = useWine();
  const [firstSelect, setFirstSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");
  const [thirdSelect, setThirdSelect] = useState("");
  const [fourthSelect, setFourthSelect] = useState("");
  console.log("a",firstSelect, secondSelect, thirdSelect, fourthSelect);

  const selectAllWines = () => {
    const Wines = [firstSelect, secondSelect, thirdSelect, fourthSelect];
    if (Wines.includes("")) {
      const winesSort = Wines.sort((a, b) => a.localeCompare(b)).slice(1);
      winesSort.forEach(element => { 
        element === "" ? winesSort.slice(1) : setStartWines(winesSort);
        });
      
    } else {
      setStartWines(Wines);
    }
  };
  console.log("f", startWines);
  return (
    <>
      <div>
        <label htmlFor="1er cepages">1er cépage</label>
        <select
          value={firstSelect}
          onChange={(e) => setFirstSelect(e.target.value)}
        >
          {props.data.map((cepage, i) => (
            <option key={i} value={cepage}>
              {cepage}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="2eme cepages">2eme cépage</label>
        <select
          value={secondSelect}
          onChange={(e) => setSecondSelect(e.target.value)}
        >
          {props.data.map((cepage, i) => (
            <option key={i} value={cepage}>
              {cepage}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="3eme cepages">3eme cépage</label>
        <select
          value={thirdSelect}
          onChange={(e) => setThirdSelect(e.target.value)}
        >
          {props.data.map((cepage, i) => (
            <option key={i} value={cepage}>
              {cepage}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="4eme cepages">4eme cépage</label>
        <select
          value={fourthSelect}
          onChange={(e) => setFourthSelect(e.target.value)}
        >
          {props.data.map((cepage, i) => (
            <option key={i} value={cepage}>
              {cepage}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={selectAllWines}>selection ok</button>
      </div>
    </>
  );
};

export default SelectCepage;
