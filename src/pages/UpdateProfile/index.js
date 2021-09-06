import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";


import api from "../../services/api";

import "./styles.css";
import axios from "axios";

export default function UpdateProfile(props) {
  const { id } = props.match.params;

  console.log(id);

  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect (() => {
    api.get(`/user/${id}`)
    .then(res => {
      setName(res.data.usuarioNome)
      setEmail(res.data.usuarioEmail)
      setCelular(res.data.usuarioCelular)
      setLogin(res.data.usuarioLogin)
      setPassword('senha')
    })
    
  }, [id]);

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      celular,
      login,
      password,
    };

    try {
      const response = await api.put("/user/:id", data);
      alert("Alterações salvas com sucesso", response);

      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Atualizar Dados Cadastrais</h1>
          <p>Atualize suas informações pessoais.</p>

          <Link className="back-link" to="/home">
            <FiArrowLeft size={16} color="#FF1801" />
            Voltar para Home
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder={login}
            name={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            placeholder={name}
            name={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder={email}
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder={celular}
            name={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
          <input
            placeholder={password}
            name={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="buttonCancel"
            type="submit"
            onClick={() => history.goBack()}
          >
            Cancelar
          </button>
          <button className="button" type="submit">
            Atualizar Cadastro
          </button>
        </form>
      </div>
    </div>
  );
}
