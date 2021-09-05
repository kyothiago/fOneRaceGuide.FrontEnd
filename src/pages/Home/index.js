import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiEdit, FiPower, FiTrash2 } from "react-icons/fi";
import PersonIcon from "@material-ui/icons/Person";
import api from "../../services/api";

import "./styles.css";
import logoImg from "../../assets/f1-new-logo.png";
import axios from "axios";

export default function Home() {
  const [circuits, setCircuits] = useState([]);
  //const [login, setLogin] = useState([]);
  const history = useHistory();

  const [] = useState([]);

  const userLogin = localStorage.getItem("login");
  const userId = localStorage.getItem("id");

  /*     useEffect(() => {
        axios.get('profile', {
            headers: {
                Authorization: userLogin
            }
        }).then(response => {
            setLogin(response.data);
        })
    }, []);
*/
  useEffect(() => {
    axios.get("http://localhost:3001/circuit/get").then((response) => {
      setCircuits(response.data);
    });
  }, []);

  async function handleDeleteCircuit(id) {
    try {
      await api.delete(
        `/circuit/delete/${id}`
        /*    headers: {
                    Authorization: userLogin,
                } */
      );

      setCircuits(circuits.filter((id) => circuits.circuitoId !== id));
    } catch (error) {
      alert("Erro ao deletar Circuito, tente novamente");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="F1 Race Guide" />
        <span>Bem Vindo(a), {userLogin}</span>
        <button
          className="buttonProfile"
          onClick={() => {
            {
              var userid = userId;
            }
            history.push(`updateProfile/${userid}`);
          }}
        >
          <PersonIcon />
        </button>
        <Link className="button" to="/newCircuit">
          Cadastrar novo circuito
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#FF1801" />
        </button>
      </header>

      <h1>Circuitos cadastrados</h1>

      <ul>
        {circuits.map((circuit) => (
          <li key={circuit.circuitoId}>
            <strong>Nome do Circuito:</strong>
            <p>{circuit.circuitoNome}</p>

            <strong>Localização:</strong>
            <p>{circuit.circuitoLocalizacao}</p>

            <strong>País:</strong>
            <p>{circuit.circuitoPais}</p>

            <strong>URL do Circuito:</strong>
            <p>{circuit.circuitoUrl}</p>

            <strong>Foto do Circuito:</strong>
            <img src={circuit.circuitoFoto}></img>
            <button
              className="buttonUpdate"
              type="button"
              onClick={() => {
                {
                  var id = circuit.circuitoId;
                }
                history.push(`circuitUpload/${id}`);
              }}
            >
              <FiEdit size={20} color="#a8a8b3" />
            </button>
            <button
              onClick={() => handleDeleteCircuit(circuit.circuitoId)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
