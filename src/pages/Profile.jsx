import Navbar from "../components/Navbar";
import { useWine } from "../contexts/Context";

const Profile = () => {
  const {name,colorShade,shine,colorIntensity,fluidityOfTears,intensityOfAromas,feeling,aromaticFamilies,flavors,framework,AromaticPersistence,score} = useWine();
  //console.log(name);
  return (
    <>
      <Navbar />
      <section>
        <h1>Vos goûts</h1>
        <div>
          <h2>Vin: {name ?? "" }</h2>
          <p>Couleur et nuance: {colorShade ?? "" } </p>
          <p>Brillance: {shine ?? "" } </p>
          <p>Intensité de la couleur: {colorIntensity ?? "" } </p>
          <p>Fluidité des larmes: {fluidityOfTears ??""}</p>
          <p>Intensité des arômes: {intensityOfAromas ??""}</p>
          <p>Impression: {feeling ??""}</p>
          <p>Familles aromatiques: {aromaticFamilies ??""}</p>
          <p>Saveurs: {flavors ??""}</p>
          <p>Structure: {framework ??""}</p>
          <p>Persistance aromatique: {AromaticPersistence ??""}</p>
          <p>score: {score ??""}</p>
        </div>
      </section>
    </>
  );
};

export default Profile;
