import { useWine } from "../contexts/WineContext";

import Glasses from "../assets/pictures/glassWine.png";
import Navbar from "../components/Navbar";

import "./finish.css";

const Finish = () => {
  const { dataWine } = useWine();

  return (
    <>
      <Navbar />
      <section className="finish-section">
        <h1 className="finish-title">Mon vin</h1>
        <div className="finish-box">
          <div className="finish-card">
            {dataWine.map((wine) => (
              <p key={wine.wineName}>
                {wine.wineName} : {sessionStorage.getItem(wine.wineName)} ml
              </p>
            ))}
          </div>
          <img className="finish-picture" src={Glasses} alt="verre de vin" />
        </div>
        <div className="finish-link">
          <button className="link">envoyer mail</button>
        </div>
      </section>
    </>
  );
};

export default Finish;
