import { useEffect, useState } from "react";
import Papa from "papaparse";
import Glasses from "../pictures/glass.png";
import "../pages/home.css";
import { Link } from "react-router-dom";

const WineList = () => {
  const URL =
    "https://docs.google.com/spreadsheets/d/1Q2L2mJr6xuxMMcktiQ2i8oDr68ag_bVjXLwdUx4CKCM/export?exportFormat=csv&format=csv?pli=1#gid=0";
  const [data, setData] = useState(["chargement"]);

  useEffect(() => {
    Papa.parse(URL, {
      download: true,
      complete: function (result) {
        setData(result.data.flat());
      },
    });
  }, []);

  return (
    <>
      {data.map((o) => (
        <Link key={o} to={`/${o}/visuel`}>
          <section className="card">
            <h2 className="card-title">{o}</h2>
            <img className="card-img" src={Glasses} alt="à déguster" />
          </section>
        </Link>
      ))}
    </>
  );
};

export default WineList;
