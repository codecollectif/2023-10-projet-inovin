import { useWine } from "../contexts/WineContext";

import Navbar from "../components/Navbar";

const Profile = () => {
  const { dataWine } = useWine();

  return (
    <>
      <Navbar />
      <section>
        <h1>Vos goûts</h1>
        {dataWine.map((o) => (
          <div key={o.wineName}>
            <h2>{o.wineName ?? ""}</h2>
            <p>Couleur et nuance: {o.colorShade ?? ""} </p>
            <p>Brillance: {o.shine ?? ""} </p>
            <p>Intensité de la couleur: {o.colorIntensity ?? ""} </p>
            <p>Fluidité des larmes: {o.fluidityOfTears ?? ""}</p>
            <p>Intensité des arômes: {o.intensityOfAromas ?? ""}</p>
            <p>Impression: {o.feeling ?? ""}</p>
            <p>Familles aromatiques: {o.aromaticFamilies ?? ""}</p>
            <p>Saveurs: {o.flavors ?? ""}</p>
            <p>Structure: {o.framework ?? ""}</p>
            <p>Persistance aromatique: {o.AromaticPersistence ?? ""}</p>
            <p>score: {o.score ?? ""}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Profile;
