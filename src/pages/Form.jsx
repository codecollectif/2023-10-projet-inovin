import { useState } from "react";
import { useWine } from "../contexts/WineContext";

import Navbar from "../components/Navbar";

import "./form.css";

const Form = () => {
  const { startWines } = useWine();
  const URL_SERVER = `${import.meta.env.VITE_URL_SERVER_MAIL}`;
  const URL_SENDER = `${import.meta.env.VITE_URL_MAIL_SENDER}`;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const quantity = startWines.map((wine) => sessionStorage.getItem(wine));

  const winesQuantity = {};
  
   startWines.forEach((element, index) => {
    winesQuantity[element] = quantity[index];
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("data",winesQuantity);

    
    let htmlList = "<ul>";

    for (const [key, value] of Object.entries(winesQuantity)) {
      htmlList += `<li>${key}: ${value} ml</li>`;
    }

    htmlList += "</ul>";
    
    fetch(URL_SERVER, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Inovin",
          email: URL_SENDER,
        },
        to: [
          //clien
          {
            name: `${lastname} ${firstname}`,
            email: email,
          },
          //Entrepise
          /* {
            name: `Recapitulatif atelier inovin pour ${lastname}${firstname}`,
            email: URL_SENDER,
          }, */
        ],
        subject: "Récapitulatif atelier Inovin",
        htmlContent:
          `<html>
          <head></head>
          <body><p>Bonjour ${lastname} ${firstname},</p>
          Merci d'avoir participer à notre atelier voici votre mélange :</p>
          ${htmlList}</body></html>`,
      }),
    })
      .then((response) => {
        console.log(response.status);
        alert(
          `donée envoyer`
        );
      })
      .catch((error) => {
        console.log(error);
      });
    
  };
  return (
    <>
      <Navbar />
      <section className="form-section">
        <h1 className="form-title">Formulaire</h1>
        <div className="form-div">
          <form className="form" onSubmit={handleSubmit}>
            <label className="form-label">
              Prénon:
              <input
                className="form-input"
                type="text"
                name="firstname"
                placeholder="prénon"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </label>
            <label className="form-label">
              Nom:
              <input
                className="form-input"
                type="text"
                name="lastname"
                placeholder="nom"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </label>
            <label className="form-label">
              Email:
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="form-label">
              Age:
              <input
                className="form-input"
                type="text"
                name="age"
                placeholder="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <input className="link" type="submit" value="Submit"></input>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
