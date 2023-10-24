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

  const viewPage =()=>{
    switch (actualPage) {
      case 0:
        console.log("page1");
        break;
      case 1:
      console.log("page2");
        break; 

      case 3:
        console.log("page3");
        break;  
      default:
        console.log("pagepardefaut");
        break;
    }
  }
  useEffect(()=>{
    viewPage()
  },[actualPage])

  console.log("test1", actualPage);
  return (
    <>
      <section>
        <div className="">
          <h1>Examen visuel</h1>
          <ColorWine />
          <ShineWine />
          <IntensityColor />
          <TearsFluidity />
          <button onClick={nextPage}>Suivant</button>
        </div>
        <div className="">
          <h1>Examen olfactif</h1>
          <IntensityAroma />
          <Feeling />
          <AromaticFamily />
          <button onClick={previousPage}>Précédent</button>
          <button>Suivant</button>
        </div>
        <div className="">
          <h1>Examen gustatif</h1>
          <Flavor />
          <Framework />
          <AromaticPersistence />
          <button>Précédent</button>
          <button>Valider</button>
        </div>
      </section>
    </>
  );
};

export default Questionnaire;
