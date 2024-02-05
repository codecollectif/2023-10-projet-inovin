import { useWine } from "../contexts/WineContext";
import { Link, useNavigate } from "react-router-dom";
import Glasses from "../assets/pictures/glassWine.png";
import Navbar from "../components/Navbar";

import "./finish.css";

const Finish = () => {
  const navigate = useNavigate();

  const {
    dataWine,
    setDataLikes,
    setStartWines,
    setDataWine,
    setLevelAllWines,
  } = useWine();

  const resetContext = () => {
    setDataLikes([]);
    setStartWines([]);
    setDataWine([]);
    setLevelAllWines(125);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <section className="finish-section">
        <h1 className="finish-title">Mon vin</h1>
        <div className="finish-box">
          <div className="finish-card">
            {dataWine.map((wine) => (
              <p key={wine.wineName}>
                {wine.wineName} : {sessionStorage.getItem(wine.wineName)} ml
              </p>
            ))}
          </div>
          <img className="finish-picture" src={Glasses} alt="verre de vin" />
        </div>
        <div></div>
        <div className="finish-link">
          <Link className="link return" onClick={resetContext} to={"/"}>
            Ne pas recevoir de mail
          </Link>
          <Link className="link send" to={"/formulaire"}>
            Recevoir mail
          </Link>
        </div>
      </section>
    </>
  );
};

export default Finish;
