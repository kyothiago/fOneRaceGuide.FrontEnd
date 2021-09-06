import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

export default function UpdateCircuito(props) {
  const { id } = props.match.params;
  console.log(id);

  const history = useHistory();
  const [nameCircuit, setNameCircuit] = useState("");
  const [local, setLocal] = useState("");
  const [country, setCountry] = useState("");
  const [time, setTime] = useState("");
  const [urlCircuit, setUrlCircuit] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect (async () => {
    await api.get("/circuit/:id")
    .then(res => {
      setNameCircuit(res.dados.circuitoNome),
      setLocal(res.dados.circuitoLocalizacao),
      setCountry(res.dados.circuitoPais),
      setUrlCircuit(res.dados.circuitoUrl),
      setPhoto(res.dados.circuitoFoto)
    })
    
  }, []);
  

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      nameCircuit,
      local,
      country,
      time,
      urlCircuit,
      photo,
    };

    // try {
    //   const response = await api.post(`/upload/${id}`, data);
    //   alert("salvo com sucesso", response);

    //   history.push("/home");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Atualizar Circuito</h1>
          <p>Faça as alterações necessárias no circuito</p>

          <Link className="back-link" to="/home">
            <FiArrowLeft size={16} color="#FF1801" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleRegister}>
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
            placeholder="Data Circuito"
            name={time}
            onChange={(e) => setTime(e.target.value)}
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
            Alterar
          </button>
        </form>
      </div>
    </div>
  );
}
