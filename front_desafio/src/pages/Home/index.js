import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiEdit, FiPower, FiTrash2 } from "react-icons/fi";
import PersonIcon from "@material-ui/icons/Person";
import api from "../../services/api";

import "./styles.css";
import logoImg from "../../assets/f1-new-logo.png";

export default function Home() {
  const token = localStorage.getItem("@formulaone:JWT_TOKEN")
  const [circuits, setCircuits] = useState([]);
  //const [login, setLogin] = useState([]);
  const history = useHistory();
  
  const userLogin = localStorage.getItem("@formulaone:login");
  const userId = localStorage.getItem("@formulaone:id");

  useEffect(() => {
    api.get("/circuit/get").then((response) => {
      setCircuits(response.data);
    });
  }, []);
  
  async function handleDeleteCircuit(id) {
    try {
      await api.delete(
        `/circuit/delete/${id}`, {headers: {'x-access-token': `${token}`}}
      );

      setCircuits(circuits.filter((id) => circuits.circuitoId !== id));
      history.go(0);
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
            history.push(`updateProfile/${userId}`);
          }}
        >
          <PersonIcon />
        </button>
        <Link className="button" to="/newCircuit">
          Cadastrar novo circuito
        </Link>
        <Link className="button" to="/relatorio">
          Gerar Relatório
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
          {console.log(circuit.circuitoFoto)}
            <strong>Localização:</strong>
            <p>{circuit.circuitoLocalizacao}</p>

            <strong>País:</strong>
            <p>{circuit.circuitoPais}</p>

            <strong>URL do Circuito:</strong>
            <p>{circuit.circuitoUrl}</p>

            <strong>Foto do Circuito:</strong>
            <img src={circuit.circuitoFoto} alt= "Foto do circuito"></img>
            <button
              className="buttonUpdate"
              type="button"
              onClick={
                () => {
                  history.push("/UpdateCircuito/" + circuit.circuitoId);
                }
              }
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
