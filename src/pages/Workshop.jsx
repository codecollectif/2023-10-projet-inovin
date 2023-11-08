import { useWine } from "../contexts/WineContext";

import GlassesVoid from "../assets/pictures/verre10.png";
import SliderWorkshop from "../components/SliderWorkshop";

const Workshop = () => {
  const { dataWine, levelWines } = useWine();

  const dataWineSort = dataWine.sort((a, b) => a.score - b.score).reverse();
  const firtWineName = dataWineSort[0].wineName;

  return (
    <section>
      <div>
        <h1>Atelier de création</h1>
        {dataWineSort.map((wine) => (
          <div key={wine.wineName}>
            <SliderWorkshop wine={wine} maxScore={firtWineName} />
          </div>
        ))}
      </div>
      <p>Volume total {levelWines} ml</p>
      <div>
        <img src={GlassesVoid} alt="verre vide" />
      </div>
    </section>
  );
};

export default Workshop;
