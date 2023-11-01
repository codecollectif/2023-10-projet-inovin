import Glasses from "../assets/pictures/glass.png";
import "../pages/welcome.css";
import { Link } from "react-router-dom";

const WineList = ({ data }) => {
  return data.map((o) => (
    <Link key={o} to={`/${o}/visuel`}>
      <section className="card">
        <h2 className="card-title">{o}</h2>
        <img className="card-img" src={Glasses} alt="à déguster" />
      </section>
    </Link>
  ));
};

export default WineList;
