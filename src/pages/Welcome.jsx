import { Link } from "react-router-dom";
import Glasses from "../assets/pictures/WinesColor.png";
import { useWine } from "../contexts/WineContext";
import "./welcome.css";

function Welcome() {
  const { startWines } = useWine();
  return (
    <main className="main">
      <h1 className="main-title">Bienvenue</h1>
      <div className="main-glasses">
        <img className="main-img-glasses" src={Glasses} alt="" />
      </div>
      <div className="main-welcome-link">
        {JSON.stringify(startWines) === JSON.stringify([]) ? (
          <Link to="/select" className="link">
            Selection{" "}
          </Link>
        ) : (
          <Link to="/start" className="link">
            Commencer
          </Link>
        )}
      </div>
    </main>
  );
}

export default Welcome;
