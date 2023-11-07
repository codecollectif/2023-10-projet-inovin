import { useParams } from "react-router-dom";

const Summary = () => {
  const { id } = useParams();

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
    </>
  );
};

export default Summary;
