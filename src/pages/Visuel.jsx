import ColorWine from "../components/ColorWine";
import ShineWine from "../components/ShineWine";
import IntensityColor from "../components/IntensityColor";
import TearsFluidity from "../components/TearsFluidity";
import { Link, useParams } from "react-router-dom";

const Visuel = () => {
  const params = useParams();
  
  return (
    <section>
      <h1>Examen visuel</h1>
      <ColorWine />
      <ShineWine />
      <IntensityColor />
      <TearsFluidity />
      <Link to={`/${params.id}/olfactif`}>Suivant</Link>
    </section>
  );
};

export default Visuel;
