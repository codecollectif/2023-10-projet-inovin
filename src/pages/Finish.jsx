import { useWine } from "../contexts/WineContext";

import Glasses from "../assets/pictures/glassWine.png";
import Navbar from "../components/Navbar";

const Finish = () => {
  const { dataWine } = useWine();

  return (
    <>
      <Navbar />
      <section>
        <h1>Mon vin</h1>
        <div>
          {dataWine.map((wine) => (
            <p key={wine.wineName}>
              {wine.wineName} : {sessionStorage.getItem(wine.wineName)} ml
            </p>
          ))}
        </div>
        <img src={Glasses} alt="" />
      </section>
    </>
  );
};

export default Finish;
