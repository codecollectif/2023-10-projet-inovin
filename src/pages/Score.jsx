import { useState } from "react";
import { Link } from "react-router-dom";
import BarScore from "../components/BarScore";

const Scrore = () => {
  //v1
  const [scorWine, setScoreWine] = useState("");
  const [error, setError] = useState("");
  //v2
  const[selectButton,setSelectButton]=useState("")

  const verifScoreChange = (e) => {
    if (parseInt(e.target.value) > 10 || parseInt(e.target.value) < 0) {
      setError("votre score doit etre entre 0 et 10");
      setScoreWine(e.target.value);
    } else {
      setScoreWine(e.target.value);
      setError("");
    }
    
    
  };
  return (
    <>
      <div>
        <h1>La notation V1</h1>
        <label htmlFor="">Votre score sur 10</label>
        <p>{error}</p>
        <input
          type="text"
          value={scorWine}
          placeholder="votre score"
          onChange={(e) => verifScoreChange(e)}
        />
        <progress max="10" value={scorWine}>
          {5}
        </progress>
        <Link to={"/"}> Valider </Link>
      </div>
      <div>
        <h1>La notation V2</h1>
        <p>Votre score sur {selectButton} /10</p>
        <div>
          <button onClick={(e)=> setSelectButton(e.target.id)} id="1">1</button>
          <button onClick={(e)=> setSelectButton(e.target.id)} id="2">2</button>
          <button onClick={(e)=> setSelectButton(e.target.id)} id="3">3</button>
          <button onClick={(e)=> setSelectButton(e.target.id)} id="4">4</button>
          <button onClick={(e)=> setSelectButton(e.target.id)} id="5">5</button>
          <button onClick={(e)=> setSelectButton(e.target.id)} id="6">6</button>
          <button onClick={(e)=> setSelectButton(e.target.id)} id="7">7</button>
          <button onClick={(e)=> setSelectButton(e.target.id)} id="8">8</button>
          <button onClick={(e)=> setSelectButton(e.target.id)} id="9">9</button>
          <button onClick={(e)=> setSelectButton(e.target.id)} id="10">10</button>
        </div>
        <Link to={"/"}> Valider </Link>
      </div>
      <div>
        <BarScore />
      </div>
    </>
  );
};

export default Scrore;
