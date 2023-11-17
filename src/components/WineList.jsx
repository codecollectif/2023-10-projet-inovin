import { Link } from "react-router-dom";
import { useWine } from "../contexts/WineContext";

import Glasses from "../assets/pictures/glass.png";
import GlassWine from "../assets/pictures/glassWine.png";

import "../pages/welcome.css";

const WineList = ({ data }) => {
  const { dataWine } = useWine();
  const listWineName = dataWine.map((wine) => wine.wineName);

  return data.map((o) => (
    <Link
      className={listWineName.includes(o) ? "card-link disable" : "card-link"}
      key={o}
      to={listWineName.includes(o) ? null : `/${o}/visuel`}
    >
      <section className="card">
        <h2 className="card-title">{o}</h2>
        {listWineName.includes(o) ? (
          <img className="card-img" src={GlassWine} alt="déguster" />
        ) : (
          <img className="card-img" src={Glasses} alt="à déguster" />
        )}
      </section>
    </Link>
  ));
};

export default WineList;
