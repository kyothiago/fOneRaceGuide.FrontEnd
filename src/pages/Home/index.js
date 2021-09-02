import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from "../../assets/f1-new-logo.png";
import axios from 'axios';

export default function Home(){
    const [circuits, setCircuits] = useState([]);
    //const [login, setLogin] = useState([]);
    const history = useHistory();
    
    const [] = useState([]);

    const userLogin = localStorage.getItem('Login');
    const userName = localStorage.getItem('Name');

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
        axios.get('http://localhost:3001/circuit/get') 
        .then((response) => {
            setCircuits(response.data);
        })
    }, []);
 
    async function handleDeleteCircuit(id){
        try {
            await axios.delete(`/circuit/delete/${id}`
             /*    headers: {
                    Authorization: userLogin,
                } */
            );

            setCircuits(circuits.filter( id => circuits.circuitoId !== id));
        } catch (error) {
            alert('Erro ao deletar Circuito, tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="F1 Race Guide"/>
                <span>Bem Vindo(a), {userName}</span>
                <Link className="button" to="/user/update/${id}">
                    Atualizar Perfil
                </Link>
                <Link className="button" to="/circuits/new">
                    Cadastrar novo circuito
                </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#FF1801" />
                </button>
            </header>

            <h1>Circuitos cadastrados</h1>

            <ul>
                {circuits.map(circuit => (
                    <li key={circuit.id}>
                        <strong>Nome do Circuito:</strong>
                        <p>{circuit.circuitoNome}</p>

                        <strong>Localização:</strong>
                        <p>{circuit.circuitoLocalizacao}</p>

                        <strong>País:</strong>
                        <p>{circuit.circuitoPais}</p>

                        <strong>URL do Circuito:</strong>
                        <p>{circuit.circuitoUrl}</p>

                        <strong>Foto do Circuito:</strong>
                        <p>{circuit.circuitoFoto}</p>

                        <button onClick={() => handleDeleteCircuit(circuit.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}