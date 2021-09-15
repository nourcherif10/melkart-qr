import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Devco.css";

const Form = () => {
  const [firstRes, setFirst] = useState("");
  const [secondRes, setsecond] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [qone, setQone] = useState("");
  const [qtwo, setQtwo] = useState("");
  const [num, setnum] = useState(1);
  const submit = () => {
    axios.post("http://localhost:3001/devco", {
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
          <small>Vous faites partie de l’équipe développement commercial et vous avez pas des connaissances approfondies dans le domaine d’IT .Vous avez été nominé à l’imprévue pour négocier la vente d’un site web et le client avec qui vous avez arrangé le rendez-vous présentiel insiste de négocier sur place les détails techniques du développement de son site web .Que faites-vous pour en sortir ?
</small>
          <input
            type="text"
            class="control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter answer"
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />
        </div>
        <button type="submit" class="submit" onClick={submit}>
          <NavLink to="/thanks" class="navlink">Submit</NavLink>
        </button>
      </form>
    </div>
  );
};

export default Form;
