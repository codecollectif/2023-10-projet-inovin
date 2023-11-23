import { Link } from "react-router-dom";
import Glasses from "../assets/pictures/WinesColor.png";
import "./welcome.css";

function Welcome() {
  return (
    <main className="box">
      <h1 className="title">Bienvenue</h1>
      <div className="glasses">
        <img src={Glasses} alt="" />
      </div>
      <Link to="/select" className="link ">
        Selection
      </Link>
      <Link to="/start" className="link welcome-btn">
        Commencer
      </Link>
    </main>
  );
}

export default Welcome;
