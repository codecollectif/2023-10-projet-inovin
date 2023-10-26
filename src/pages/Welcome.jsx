import { Link } from "react-router-dom";
import Glasses from "../pictures/WinesColor.png";
import "./welcome.css";

function Welcome() {
  sessionStorage.clear();
  return (
    <main className="box">
      <h1 className="title">Bienvenue</h1>
      <div className="glasses">
        <img src={Glasses} alt="" />
      </div>
      <Link to="/home" className="link welcome-btn">
        Commencer
      </Link>
    </main>
  );
}

export default Welcome;
