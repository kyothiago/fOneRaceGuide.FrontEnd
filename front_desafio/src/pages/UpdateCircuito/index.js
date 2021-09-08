import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

export default function UpdateCircuito(props) {
  const token = localStorage.getItem("@formulaone:JWT_TOKEN")
  const { id } = props.match.params;
  console.log(id);

  const history = useHistory();
  const [nameCircuit, setNameCircuit] = useState("");
  const [urlCircuit, setUrlCircuit] = useState("");
  const [photo, setPhoto] = useState([]);

    const uploadPhoto = new FormData();
    uploadPhoto.append("nameCircuit", nameCircuit);
    uploadPhoto.append("urlCircuit", urlCircuit);
    uploadPhoto.append("photo", photo[0]);
    console.log(photo);

  useEffect (() => {
     api.get(`/circuit/${id}`, {headers:{"x-access-token":`${token}`}})
    .then(res => {
      setNameCircuit(res.data.circuitoNome)
      setUrlCircuit(res.data.circuitoUrl)
    })
    
  }, [id]);
  

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await api.post(`/circuit/upload/${id}`, uploadPhoto, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${uploadPhoto._boundary}`,
          'x-access-token': `${token}`
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
          <h1>Atualizar Circuito</h1>
          <p>Faça as alterações necessárias no circuito</p>

          <Link className="back-link" to="/home">
            <FiArrowLeft size={16} color="#FF1801" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleRegister} encType="multipart/form-data">
          <input
            placeholder={nameCircuit}
            name={nameCircuit}
            onChange={(e) => setNameCircuit(e.target.value)}
          />
          <input
            placeholder={urlCircuit}
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
            type="button"
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
