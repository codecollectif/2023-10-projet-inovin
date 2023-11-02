import { useLoaderData } from "react-router-dom";

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
        <button type="button" className="link start-btn">
          Passer à la page suivante
        </button>
      </div>
    </main>
  );
}

export default Start;
