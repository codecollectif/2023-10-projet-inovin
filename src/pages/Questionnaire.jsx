import { Link } from "react-router-dom";
import ColorWine from "../components/ColorWine";
import ShineWine from "../components/ShineWine";
import IntensityColor from "../components/IntensityColor";
import TearsFluidity from "../components/TearsFluidity";
import IntensityAroma from "../components/IntensityAroma";
import Feeling from "../components/Feeling";
import AromaticFamily from "../components/AromaticFamily";
import Flavor from "../components/Flavor";
import Framework from "../components/Framework";
import AromaticPersistence from "../components/AromaticPersistence";
import { useState } from "react";
import { useEffect } from "react";

const Questionnaire = () => {
  const [actualPage, setActualPage] = useState(0);

  const nextPage = () => {
    setActualPage(actualPage + 1);
    console.log("test0", actualPage);
  };
  const previousPage = () => {
    setActualPage(actualPage - 1);
  };

  const viewPage = () => {
    switch (actualPage) {
      case 0:
        return(
        <>
          <h1>Examen visuel</h1>
          <ColorWine />
          <ShineWine />
          <IntensityColor />
          <TearsFluidity />
          <button onClick={nextPage}>Suivant</button>
        </>
        )
        //break;
      case 1:
        return(
          <>
            <h1>Examen olfactif</h1>
            <IntensityAroma />
            <Feeling />
            <AromaticFamily />
            <button onClick={previousPage}>Précédent</button>
            <button onClick={nextPage}>Suivant</button>
          </>
        )
        //break;
      case 2:
        return(
          <>
            <h1>Examen gustatif</h1>
            <Flavor />
            <Framework />
            <AromaticPersistence />
            <button onClick={previousPage}>Précédent</button>
            <Link to={"/"}>Valider</Link>
          </>
        )
        //break;
      default:
        <Link to={"/"}></Link>
        break;
    }
  };
  useEffect(() => {
    viewPage();
  }, [actualPage]);

  console.log("test1", actualPage);
  return (
    <>
      <section>
        {viewPage()}
      </section>
    </>
  );
};

export default Questionnaire;
