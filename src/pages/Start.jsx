import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

import WineList from "../components/WineList";
import Navbar from "../components/Navbar";

import "./start.css";

function Start() {
  const wines = useLoaderData();
  sessionStorage.clear();

  return (
    <main className="start">
      <Navbar />
      <h1 className="start-title">Affinez vos goûts</h1>
      <div className="start-data">
        <WineList data={wines} />
      </div>
      <div className="start-div-btn">
        <Link to={"/creation"} className="link start-btn">
          Passer à la page suivante
        </Link>
      </div>
    </main>
  );
}

export default Start;
