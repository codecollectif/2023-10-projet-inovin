import React from "react";
import { useWine } from "../contexts/WineContext";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ProfileLikes from "../components/ProfileLikes";

import "./profile.css";

const entries = [
  { label: "Couleur et nuance", key: "colorShade" },
  { label: "Brillance", key: "shine" },
  { label: "Intensité de la couleur", key: "colorIntensity" },
  { label: "Fluidité des larmes", key: "fluidityOfTears" },
  { label: "Intensité des arômes", key: "intensityOfAromas" },
  { label: "Impression", key: "feeling" },
  { label: "Familles aromatiques", key: "aromaticFamilies" },
  { label: "Saveur", key: "flavors" },
  { label: "Structure", key: "framework" },
  { label: "Persistance aromatique", key: "aromaticPersistence" },
];

const Profile = () => {
  const { dataWine, dataLikes, startWines, setDataLikes } = useWine();

  //init tous les vin a zero ml
  startWines.map((wine) => sessionStorage.setItem(`${wine}`, 0));

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
    setDataLikes(otherWine);
  };

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
            <section className="profile-card" key={wine.wineName}>
              <header>
                <h2 className="profile-title">{wine.wineName ?? ""}</h2>
                <button
                  name={wine.wineName}
                  onClick={(e) => handleClick(e)}
                  className={
                    dataLikes.find((wine) => wine.countLike === 10)
                      ? "profile-disable"
                      : "profile-super-like "
                  }
                >
                  Coup de ❤️
                </button>
              </header>
              <dl>
                {entries.map(({ label, key }) => (
                  <React.Fragment key={key}>
                    <dt>{label}</dt>
                    <dd>
                      {wine[key]}{" "}
                      <ProfileLikes
                        data={dataLikes
                          .find((type) => type.wineName === wine.wineName)
                          [`${key}Like`]?.toString()}
                      />
                    </dd>
                  </React.Fragment>
                ))}
              </dl>
            </section>
          ))}
        </div>
        <div className="profile-div-link">
          <Link
            className={
              dataLikes.find((wine) => wine.countLike === 10)
                ? "link"
                : "profile-disable"
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
