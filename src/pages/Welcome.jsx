import "./welcome.css";
import { Link } from "react-router-dom";
import Glasses from "../pictures/WinesColor.png";

function Welcome() {
  return (
    <div className="box">
      <h1 className="title">Bienvenue</h1>
      <div className="glasses">
        <img src={Glasses} alt="glasses of wine" />
      </div>
      <Link to="/home" className="link">
        Commencer
      </Link>
    </div>
  );
}

export default Welcome;
