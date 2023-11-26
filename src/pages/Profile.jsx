import { useState } from "react";
import { useWine } from "../contexts/WineContext";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ProfileLikes from "../components/ProfileLikes";

import "./profile.css";

const Profile = () => {
  const { dataWine, dataLikes, setDataLikes } = useWine();

  const [click, setClick] = useState(false);
  const FistWine = dataLikes.find((wine)=>wine.countLike === 10)
  const handleClick = (e) => {
    const otherWine = dataLikes.filter(
      (like) => like.wineName !== e.target.name
    );
    otherWine.push({
      aromaticFamiliesLike: "true",
      aromaticPersistenceLike: "true",
      colorIntensityLike: "true",
      colorShadeLike: "true",
      feelingLike: "true",
      flavorsLike: "true",
      fluidityOfTearsLike: "true",
      frameworkLike: "true",
      intensityOfAromasLike: "true",
      shineLike: "true",
      countLike: 10,
      wineName: e.target.name,
    });
    otherWine.sort((a, b) => a.countLike + b.countLike);
    setClick(!click);
    setDataLikes(otherWine);
  };
console.log(FistWine);
  return (
    <>
      <Navbar />
      <section className="profile-box">
        <h1 className="profile-main-title">
          {JSON.stringify(dataWine) === JSON.stringify([])
            ? "Vous n'avez pas degusté de vin"
            : "Vos goûts"}
        </h1>
        <div className="profile-div">
          {dataWine.map((wine) => (
            <div className="profile-card" key={wine.wineName}>
              <div>
                <h2 className="profile-title">{wine.wineName ?? ""}</h2>
                <button
                  name={wine.wineName}
                  onClick={(e) => handleClick(e)}
                  className={
                    dataLikes.find((wine)=>wine.countLike === 10) ? "profile-disable" : "profile-super-like "
                  }
                >
                  Coups de ❤️
                </button>
              </div>
              <p>
                Couleur et nuance: {wine.colorShade ?? ""}{"   "}
                <ProfileLikes
                  data={dataLikes
                    .filter((type) => type.wineName === wine.wineName)
                    .map((truc) => truc.colorShadeLike)
                    .toString()}
                />
              </p>
              <p>
                Brillance: {wine.shine ?? ""}{"   "}
                <ProfileLikes
                  data={dataLikes
                    .filter((type) => type.wineName === wine.wineName)
                    .map((truc) => truc.shineLike)
                    .toString()}
                />
              </p>
              <p>
                Intensité de la couleur: {wine.colorIntensity ?? ""}{"   "}
                <ProfileLikes
                  data={dataLikes
                    .filter((type) => type.wineName === wine.wineName)
                    .map((truc) => truc.colorIntensityLike)
                    .toString()}
                />
              </p>
              <p>
                Fluidité des larmes: {wine.fluidityOfTears ?? ""}{"   "}
                <ProfileLikes
                  data={dataLikes
                    .filter((type) => type.wineName === wine.wineName)
                    .map((truc) => truc.fluidityOfTearsLike)
                    .toString()}
                />
              </p>
              <p>
                Intensité des arômes: {wine.intensityOfAromas ?? ""}{"   "}
                <ProfileLikes
                  data={dataLikes
                    .filter((type) => type.wineName === wine.wineName)
                    .map((truc) => truc.intensityOfAromasLike)
                    .toString()}
                />
              </p>
              <p>
                Impression: {wine.feeling ?? ""}{"   "}
                <ProfileLikes
                  data={dataLikes
                    .filter((type) => type.wineName === wine.wineName)
                    .map((truc) => truc.feelingLike)
                    .toString()}
                />
              </p>
              <p>
                Familles aromatiques: {wine.aromaticFamilies ?? ""}{"   "}
                <ProfileLikes
                  data={dataLikes
                    .filter((type) => type.wineName === wine.wineName)
                    .map((truc) => truc.aromaticFamiliesLike)
                    .toString()}
                />
              </p>
              <p>
                Saveurs: {wine.flavors ?? ""}{"   "}
                <ProfileLikes
                  data={dataLikes
                    .filter((type) => type.wineName === wine.wineName)
                    .map((truc) => truc.flavorsLike)
                    .toString()}
                />
              </p>
              <p>
                Structure: {wine.framework ?? ""}{"   "}
                <ProfileLikes
                  data={dataLikes
                    .filter((type) => type.wineName === wine.wineName)
                    .map((truc) => truc.frameworkLike)
                    .toString()}
                />
              </p>
              <p>
                Persistance aromatique: {wine.aromaticPersistence ?? ""}{"   "}
                <ProfileLikes
                  data={dataLikes
                    .filter((type) => type.wineName === wine.wineName)
                    .map((truc) => truc.aromaticPersistenceLike)
                    .toString()}
                />
              </p>
            </div>
          ))}
        </div>
        <div className="profile-div-link">
          <Link
            className={
              dataLikes.find((wine)=>wine.countLike === 10) ? "link" : "profile-disable"
            }
            to={"/creation"}
          >
            Passer à la page suivante
          </Link>
        </div>
      </section>
    </>
  );
};

export default Profile;
