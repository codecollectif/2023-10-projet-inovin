import { useState } from "react";
import { useWine } from "../contexts/WineContext";
import { Link } from "react-router-dom";

const SelectCepage = (props) => {
  const { setStartWines } = useWine();

  const [firstSelect, setFirstSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");
  const [thirdSelect, setThirdSelect] = useState("");
  const [fourthSelect, setFourthSelect] = useState("");

  const selectAllWines = () => {
    const Wines = [firstSelect, secondSelect, thirdSelect, fourthSelect];
    setStartWines(Wines);
    if (Wines.includes("")) {
      const winesSort = Wines.sort((a, b) => a.localeCompare(b)).slice(1);
      setStartWines(winesSort);
      if (winesSort.includes("")) {
        const secondSort = winesSort.slice(1);
        setStartWines(secondSort);
      }
    }
  };

  return (
    <>
      <div className="select-div">
        <div>
          <label className="select-label" htmlFor="1er cepages">
            1er cépage
          </label>
          <select
            className="select"
            value={firstSelect}
            onChange={(e) => setFirstSelect(e.target.value)}
          >
            <option>Aucun</option>
            {props.data.map((cepage, i) => (
              <option key={i} value={cepage}>
                {cepage}
              </option>
            ))}
          </select>
          <span className="select-star">*</span>
        </div>
        <div>
          <label className="select-label" htmlFor="2eme cepages">
            2eme cépage
          </label>
          <select
            className="select"
            value={secondSelect}
            onChange={(e) => setSecondSelect(e.target.value)}
          >
            <option>Aucun</option>
            {props.data.map((cepage, i) => (
              <option key={i} value={cepage}>
                {cepage}
              </option>
            ))}
          </select>
          <span className="select-star">*</span>
        </div>
        <div>
          <label className="select-label" htmlFor="3eme cepages">
            3eme cépage
          </label>
          <select
            className="select"
            value={thirdSelect}
            onChange={(e) => setThirdSelect(e.target.value)}
          >
            <option>Aucun</option>
            {props.data.map((cepage, i) => (
              <option key={i} value={cepage}>
                {cepage}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="select-label" htmlFor="4eme cepages">
            4eme cépage
          </label>
          <select
            className="select"
            value={fourthSelect}
            onChange={(e) => setFourthSelect(e.target.value)}
          >
            <option>Aucun</option>
            {props.data.map((cepage, i) => (
              <option key={i} value={cepage}>
                {cepage}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        className={
          firstSelect === "" || secondSelect === ""
            ? "select-disable"
            : "select-link"
        }
      >
        <Link className="link" to="/start" onClick={selectAllWines}>
          selection ok
        </Link>
      </div>
    </>
  );
};

export default SelectCepage;
