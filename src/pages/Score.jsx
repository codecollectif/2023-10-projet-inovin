import { useState } from "react";
import { Link } from "react-router-dom";
import BarScore from "../components/BarScore";
import { GiWineBottle } from "react-icons/gi";

const Scrore = () => {
  //v1
  const [scorWine, setScoreWine] = useState("");
  const [error, setError] = useState("");
  //v2
  const [selectButton, setSelectButton] = useState("");

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
          <div>
            <GiWineBottle
              id="1"
              style={{color:"#ac1e44"}}
              size={38}
              onClick={(e) => setSelectButton(e.target.id)}
            />
            <GiWineBottle
              id="2"
              style={{color:"#ac1e44"}}
              size={38}
              onClick={(e) => setSelectButton(e.target.id)}
            />
            <GiWineBottle
              id="3"
              style={{color:"#ac1e44"}}
              size={38}
              onClick={(e) => setSelectButton(e.target.id)}
            />
            <GiWineBottle
              id="4"
              style={{color:"#ac1e44"}}
              size={38}
              onClick={(e) => setSelectButton(e.target.id)}
            />
            <GiWineBottle
              id="5"
              style={{color:"#ac1e44"}}
              size={38}
              onClick={(e) => setSelectButton(e.target.id)}
            />
            <GiWineBottle
              id="6"
              style={{color:"#ac1e44"}}
              size={38}
              onClick={(e) => setSelectButton(e.target.id)}
            />
            <GiWineBottle
              id="7"
              style={{color:"#ac1e44"}}
              size={38}
              onClick={(e) => setSelectButton(e.target.id)}
            />
            <GiWineBottle
              id="8"
              style={{color:"#ac1e44"}}
              size={38}
              onClick={(e) => setSelectButton(e.target.id)}
            />
            <GiWineBottle
              id="9"
              style={{color:"#ac1e44"}}
              size={38}
              onClick={(e) => setSelectButton(e.target.id)}
            />
            <GiWineBottle
              id="10"
              style={{color:"#ac1e44"}}
              size={38}
              onClick={(e) => setSelectButton(e.target.id)}
            />
          </div>

          <div>
            <button onClick={(e) => setSelectButton(e.target.id)} id="1">
              1
            </button>
            <button onClick={(e) => setSelectButton(e.target.id)} id="2">
              2
            </button>
            <button onClick={(e) => setSelectButton(e.target.id)} id="3">
              3
            </button>
            <button onClick={(e) => setSelectButton(e.target.id)} id="4">
              4
            </button>
            <button onClick={(e) => setSelectButton(e.target.id)} id="5">
              5
            </button>
            <button onClick={(e) => setSelectButton(e.target.id)} id="6">
              6
            </button>
            <button onClick={(e) => setSelectButton(e.target.id)} id="7">
              7
            </button>
            <button onClick={(e) => setSelectButton(e.target.id)} id="8">
              8
            </button>
            <button onClick={(e) => setSelectButton(e.target.id)} id="9">
              9
            </button>
            <button onClick={(e) => setSelectButton(e.target.id)} id="10">
              10
            </button>
          </div>
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
