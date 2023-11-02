import { useParams } from "react-router-dom";
import { useWine } from "../contexts/WineContext";

const Summary = () => {
  const { id } = useParams();
  
  const {dataWine, setDataWine} = useWine()

  const testBtn =()=>{
    dataWine.push({
      wineName:id,
      colorShade:sessionStorage.getItem("colorShade"),
      shine:sessionStorage.getItem("shine"),
      colorIntensity:sessionStorage.getItem("colorIntensity"),
      fluidityOfTears:sessionStorage.getItem("fluidityOfTears"),
      intensityOfAromas:sessionStorage.getItem("intensityOfAromas"),
      feeling:sessionStorage.getItem("feeling"),
      aromaticFamilies:sessionStorage.getItem("aromaticFamilies"),
      flavors:sessionStorage.getItem("flavors"),
      framework:sessionStorage.getItem("framework"),
      aromaticPersistence:sessionStorage.getItem("aromaticPersistence"),
      score:sessionStorage.getItem("score")
    })
    setDataWine(dataWine)
    return console.log("testbtn",dataWine);
  }

  console.log("pageSumary",dataWine);
  return (
    <>
      <h1>Vin choisi: {id} </h1>
      <p>Couleur et nuance: {sessionStorage.getItem("colorShade")}</p>
      <p>Brillance: {sessionStorage.getItem("shine")}</p>
      <p>Intensité de la couleur: {sessionStorage.getItem("colorIntensity")}</p>
      <p>Fluidité des larmes: {sessionStorage.getItem("fluidityOfTears")}</p>
      <p>Intensité des arômes: {sessionStorage.getItem("intensityOfAromas")}</p>
      <p>Impression: {sessionStorage.getItem("feeling")}</p>
      <p>Familles aromatiques: {sessionStorage.getItem("aromaticFamilies")}</p>
      <p>Saveurs: {sessionStorage.getItem("flavors")}</p>
      <p>Structure: {sessionStorage.getItem("framework")}</p>
      <p>
        Persistance aromatique:
        {sessionStorage.getItem("aromaticPersistence")}
      </p>
      <p>Score:{sessionStorage.getItem("score")}</p>
      <button onClick={testBtn}>test</button>
    </>
  );
};

export default Summary;
