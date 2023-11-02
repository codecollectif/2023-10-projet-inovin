import { useWine } from "../contexts/WineContext";

import Navbar from "../components/Navbar";

import "./profile.css";

const Profile = () => {
  const { dataWine } = useWine();

  return (
    <>
      <Navbar />
      <section className="profile-box">
        <h1 className="profile-main-title">
          {JSON.stringify(dataWine) === JSON.stringify([])
            ? "Vous n'avez pas deguster de vin"
            : "Vos goûts"}
        </h1>
        <div className="profile-div">
          {dataWine.map((o) => (
            <div className="profile-card" key={o.wineName}>
              <h2 className="profile-title">{o.wineName ?? ""}</h2>
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
        </div>
      </section>
    </>
  );
};

export default Profile;
