<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import f1Logo from "../../assets/f1-new-logo.png";
import api from '../../services/api';

export default function Logon(){
    
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('usuarioId', id);
            localStorage.setItem('senha', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente');
        }

    }
    
    return (
            
        <div className="logon-container">
            <section className="form">
            <div className = "imagem">
            <img src={f1Logo} alt="F1"/>
            </div>
            <div className = "formulario">
                <form onSubmit={handleLogin}> 
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID" 
                        name={id}
                        onChange={ e => setId(e.target.value)}
                    />
                    <input 
                        placeholder="Sua Senha" 
                        name={password}
                        type="password"
                        onChange={ e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
                </div>
            </section>
        </div>
    );
}
=======
import React, { useStates } from 'react';
import { Link, useHistory } from "react-router-dom";


export default function Logon(){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    try {

    } catch (err) {
        alert(`Algo deu errado: ${err}`);
      }
    }

    return (
        <div>
            <section>
                <form onSubmit={}>
                    <h1> Faça o seu Logon</h1>
                    <input
                        placeholder="Seu login"
                        value={user}
                    />
        
                    <input
                        placeholder="Sua senha"
                        value={password}
                    />

                    <button className="button" type="submit">
                    Entrar
                    </button>
                </form>
            </section>
        </div>
    )
}
>>>>>>> 548b3cf36fc270a16002d6793e1cfd7acd2451aa
