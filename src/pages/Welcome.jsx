import { Link } from "react-router-dom";
import Glasses from "../assets/pictures/WinesColor.png";
import { useWine } from "../contexts/WineContext";
import "./welcome.css";

function Welcome() {
  const { startWines } = useWine();
  return (
    <main className="box">
      <h1 className="title">Bienvenue</h1>
      <div className="glasses">
        <img src={Glasses} alt="" />
      </div>
      {JSON.stringify(startWines) ===  JSON.stringify([])  
      ?
      <Link to="/select" className="link welcome-btn">Selection </Link>
      :  
      <Link to="/start" className="link welcome-btn">
        Commencer
      </Link>}
    </main>
  );
}

export default Welcome;
