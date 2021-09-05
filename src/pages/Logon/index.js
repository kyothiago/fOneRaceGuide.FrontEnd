import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";

import f1Logo from "../../assets/f1-new-logo.png";
import api from "../../services/api";

export default function Logon() {
  var axiosConfig = {
    headers: {
      Authorization:
        "x-access-token" + localStorage.getItem("token", "refreshToken"),
    },
  };
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    const data = {
      login,
      password,
    };
    try {
      const response = await api.post("/user/authenticate", data);
      var token = response.data.token;
      var refreshToken = response.data.refreshToken;
      var id = response.data.id;
      localStorage.setItem("@formulaone:login", login);
      localStorage.setItem("@formulaone:id", id);
      localStorage.setItem("@formulaone:JWT_TOKEN", token);
      localStorage.setItem("@formulaone:refreshToken", refreshToken);
      axiosConfig.headers.Authorization =
        "x-access-token" + localStorage.getItem("token", "refreshToken");
      history.push("/home");
    } catch (e) {
      alert("Falha ao autenticar usuário");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <div className="imagem">
          <img src={f1Logo} alt="F1" />
        </div>
        <div className="formulario">
          <form onSubmit={handleLogin}>
            <h1>Faça seu login</h1>

            <input
              placeholder="Seu Login"
              name={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              placeholder="Sua Senha"
              name={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button" type="submit">
              Entrar
            </button>

            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#e02041" />
              Não tenho cadastro
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}
