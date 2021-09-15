import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./marketing.css";

const Form = () => {
  const [firstRes, setFirst] = useState("");
  const [secondRes, setsecond] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [qone, setQone] = useState("");
  const [qtwo, setQtwo] = useState("");
  const [num, setnum] = useState(1);
  const submit = () => {
    axios.post("http://localhost:3001/marketing", {
      first: firstRes,
      second: secondRes,
      name: name,
      mail: mail,
    });
    alert("reponse enregistrer");
  };
  return (
    <div className="bodyy">
        <div className="azer"></div>
      <form>
        <div class="form">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <small id="emailHelp" class="formText">
           * We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form">
          <label for="exampleInput">Mail</label>
          <input
            type="email"
            class="control"
            id="exampleInputPassword1"
            placeholder="Enter email"
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
        </div>
        <div class="form">
          <label for="exampleInputEmail1">Question 1</label>
          <small>Créer un poste pour le 9ème anniversaire de la Melkart Je (facebook) [Ci-joint un lien pour vous aidez en ce qui concerne notre charte graphique: https://drive.google.com/folderview?id=1E8NkrAYdzFwCiNqcJxWea2ybjM0KZ0IF]</small>
        </div>
        <div class="form">
          <label for="exampleInputEmail1">Question 2</label>
          <small>Ajouter la description de ce poste</small>
          <small>** Tout travail doit etre envoyé à cet mail : "marketing.melkart.je@gmail.com", y compris la description demandée sous l'objet nom , prenom , niveau d'étude **</small>
        </div>
        <button type="submit" class="submit" onClick={submit}>
          <NavLink to="/thanks" class="navlink">Submit</NavLink>
        </button>
      </form>
    </div>
  );
};

export default Form;