import { useParams } from "react-router-dom";
import ButtonLike from "../components/ButtonLike";

const Summary = () => {
  const { id } = useParams();
  
  return (
    <>
      <h1>Vin choisi: {id} </h1>
      <p>
        Couleur et nuance: {sessionStorage.getItem("colorShade")}{" "}
        <ButtonLike name={"colorShade"} />
      </p>
      <p>Brillance: {sessionStorage.getItem("shine")}</p>
      <ButtonLike name={"shine"}/>
      <p>Intensité de la couleur: {sessionStorage.getItem("colorIntensity")}</p>
      <ButtonLike name={"colorIntensity"}/>
      <p>Fluidité des larmes: {sessionStorage.getItem("fluidityOfTears")}</p>
      <ButtonLike name={"fluidityOfTears"}/>
      <p>Intensité des arômes: {sessionStorage.getItem("intensityOfAromas")}</p>
      <ButtonLike name={"intensityOfAromas"}/>
      <p>Impression: {sessionStorage.getItem("feeling")}</p>
      <ButtonLike name={"feeling"}/>
      <p>Familles aromatiques: {sessionStorage.getItem("aromaticFamilies")}</p>
      <ButtonLike name={"aromaticFamilies"}/>
      <p>Saveurs: {sessionStorage.getItem("flavors")}</p>
      <ButtonLike name={"flavors"}/>
      <p>Structure: {sessionStorage.getItem("framework")}</p>
      <ButtonLike name={"framework"}/>
      <p>
        Persistance aromatique:
        {sessionStorage.getItem("aromaticPersistence")}
      </p>
      <ButtonLike name={"aromaticPersistence"}/>
    </>
  );
};

export default Summary;
