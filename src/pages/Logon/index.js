import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import f1Logo from "../../assets/f1-new-logo.png";
import api from '../../services/api';

export default function Logon(){
    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', { login });

            localStorage.setItem('usuarioLogin', setLogin);
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
            <img src={ f1Logo } alt="F1"/>
            </div>
            <div className = "formulario">
                <form onSubmit={handleLogin}> 
                    <h1>Faça seu login</h1>

                    <input 
                        placeholder="Seu Login" 
                        name={login}
                        onChange={ e => setLogin(e.target.value)}
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
