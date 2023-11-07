import { Link } from "react-router-dom";
import { useWine } from "../contexts/WineContext";

import Glasses from "../assets/pictures/glass.png";
import GlassWine from "../assets/pictures/glassWine.png";

import "../pages/welcome.css";

const WineList = ({ data }) => {
  const { dataWine } = useWine();
  const listWineName = dataWine.map((wine) => wine.wineName);

  return data.map((o) => (
    <Link key={o} to={`/${o}/visuel`}>
      <section className="card">
        <h2 className="card-title">{o}</h2>
        {JSON.stringify(Array.of(o)) ===
        JSON.stringify(listWineName.filter((wine) => wine === o)) ? (
          <img className="card-img" src={GlassWine} alt="déguster" />
        ) : (
          <img className="card-img" src={Glasses} alt="à déguster" />
        )}
      </section>
    </Link>
  ));
};

export default WineList;
