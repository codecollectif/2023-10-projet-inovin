import { Link, useParams } from "react-router-dom";
import Flavor from "../components/Flavor";
import Framework from "../components/Framework";
import AromaticPersistence from "../components/AromaticPersistence";

const Gustatif = () => {
  const params = useParams();
  return (
    <section>
      <h1>Examen gustatif</h1>
      <Flavor />
      <Framework />
      <AromaticPersistence />
      <Link to={`/${params.id}/olfactif`}>Précédent</Link>
      <Link to={`/${params.id}/recapitulatif`}>Valider</Link>
    </section>
  );
};

export default Gustatif;
