import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

export default function RegisterCircuit() {
  const history = useHistory();
  const [nameCircuit, setNameCircuit] = useState("");
  const [local, setLocal] = useState("");
  const [country, setCountry] = useState("");
  const [urlCircuit, setUrlCircuit] = useState("");
  const [photo, setPhoto] = useState([]);

  async function handleRegister(e) {
    e.preventDefault();

    const uploadPhoto = new FormData();
    uploadPhoto.append("nameCircuit", nameCircuit);
    uploadPhoto.append("local", local);
    uploadPhoto.append("country", country);
    uploadPhoto.append("urlCircuit", urlCircuit);
    uploadPhoto.append("photo", photo[0]);

    try {
      const response = await api.post("/circuit/add", uploadPhoto, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${uploadPhoto._boundary}`,
        },
      });
      alert("salvo com sucesso", response);
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Cadastrar Novo Circuito</h1>
          <p>
            Descreva o circuito inserindo um título,localização, país e data da
            corrida.
          </p>

          <Link className="back-link" to="/home">
            <FiArrowLeft size={16} color="#FF1801" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleRegister} enctype="multipart/form-data">
          <input
            placeholder="Nome do Circuito"
            name={nameCircuit}
            onChange={(e) => setNameCircuit(e.target.value)}
          />
          <input
            placeholder="Localização"
            name={local}
            onChange={(e) => setLocal(e.target.value)}
          />
          <input
            placeholder="País"
            name={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            placeholder="URl do Circuito"
            name={urlCircuit}
            onChange={(e) => setUrlCircuit(e.target.value)}
          />
          <input
            type="file"
            name={photo}
            onChange={(e) => setPhoto(e.target.files)}
          />
          <button
            className="buttonCancel"
            type="submit"
            onClick={() => history.goBack()}
          >
            Cancelar
          </button>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
