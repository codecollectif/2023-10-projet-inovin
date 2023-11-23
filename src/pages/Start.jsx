//import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

import WineList from "../components/WineList";
import Navbar from "../components/Navbar";

import { useWine } from "../contexts/WineContext";

import "./start.css";

function Start() {
  const { dataWine, startWines } = useWine();
  console.log(dataWine, startWines);
  // const wines = useLoaderData();

  sessionStorage.clear();

  startWines.map((wine) => sessionStorage.setItem(`${wine}`, 0));

  return (
    <main className="start">
      <Navbar />
      <h1 className="start-title">Affinez vos goûts</h1>
      <div className="start-data">
        <WineList data={startWines} />
      </div>
      <div className="start-div-btn">
        <Link
          to={"/creation"}
          className={
            startWines.length !== dataWine.length
              ? "start-disable start-btn"
              : "link start-btn"
          }
        >
          Passer à la page suivante
        </Link>
      </div>
    </main>
  );
}

export default Start;
