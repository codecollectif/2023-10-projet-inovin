import { Link } from "react-router-dom";
import { useWine } from "../contexts/WineContext";

import Glasses from "../assets/pictures/glass.png";
import GlassWine from "../assets/pictures/glassWine.png";

import "../pages/welcome.css";

const WineList = ({ data }) => {

  const { dataWine } = useWine();
  const listWineName = dataWine.map((wine) => wine.wineName);

  return data.map((wine) => (
    <Link
      className={listWineName.includes(wine) ? "card-link disable" : "card-link"}
      key={wine}
      to={listWineName.includes(wine) ? null : `/${wine}/visuel`}
    >
      <section className="card">
        <h2 className="card-title">{wine}</h2>
        {listWineName.includes(wine) ? (
          <img className="card-img" src={GlassWine} alt="déguster" />
        ) : (
          <img className="card-img" src={Glasses} alt="à déguster" />
        )}
      </section>
    </Link>
  ));
};

export default WineList;
