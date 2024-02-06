import { useState } from "react";
import { useWine } from "../contexts/WineContext";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import "./form.css";

const URL_SERVER = `${import.meta.env.VITE_URL_SERVER_MAIL}`;
const URL_SENDER = `${import.meta.env.VITE_URL_MAIL_SENDER}`;

const validateEmail = (email) => {
  const emailReg = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
  );
  if (!emailReg.test(email)) {
    return alert("Email invalide");
  } else {
    return true;
  }
};

const validateFirstname = (firstname) => {
  if (firstname === "") {
    return alert("Remplissez votre prénom");
  } else {
    return true;
  }
};

const validateLastname = (lastname) => {
  if (lastname === "") {
    return alert("Remplissez votre nom");
  } else {
    return true;
  }
};

const Form = () => {
  const { startWines, setDataLikes, setStartWines, setDataWine, setLevelAllWines } = useWine();
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const quantity = startWines.map((wine) => sessionStorage.getItem(wine));

  const winesQuantity = {};

  startWines.forEach((element, index) => {
    winesQuantity[element] = quantity[index];
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateFirstname(firstname) &&
      validateLastname(lastname) &&
      validateEmail(email)
    ) {
      //create message mail
      let htmlList = "<ul>";
      for (const [key, value] of Object.entries(winesQuantity)) {
        htmlList += `<li>${key}: ${value} ml</li>`;
      }
      htmlList += "</ul>";

      //send mail
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
            //Client
            {
              name: `${lastname} ${firstname}`,
              email: email,
            },
            //Entreprise
            /* {
              name: `Récapitulatif atelier Inovin pour ${lastname} ${firstname}`,
              email: URL_SENDER,
            }, */
          ],
          subject: "Mon assemblage atelier Inovin",
          htmlContent: `<html>
            <head></head>
            <body><p>Bonjour ${lastname} ${firstname},</p>
            Merci d'avoir participé à notre atelier voici votre assemblage :</p>
            ${htmlList}</body></html>`,
        }),
      })
        .then((response) => {
          console.log(response.status);
          setDataLikes([])
          setStartWines([])
          setDataWine([])
          setLevelAllWines(125)
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <Navbar />
      <section className="form-section">
        <h1 className="form-title">Formulaire</h1>
        <div className="form-div">
          <form className="form" onSubmit={handleSubmit}>
            <label className="form-label">
              Prénom :
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
              Nom :
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
              Email :
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <input
              className="link submit"
              type="submit"
              value="Envoyer mail"
            ></input>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
