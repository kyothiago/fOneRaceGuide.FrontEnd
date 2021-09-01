import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import f1Logo from "../../assets/f1-new-logo.png";

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            celular,
            login,
            senha
        };
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e acompanhe 
                        todos os detalhes dos circuitos da Formula 1. 
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#FF1801"/>
                        Voltar
                    </Link>
                </section>

                <form onSubmit={ handleRegister }>
                <input 
                        placeholder="Login" 
                        name={login}
                        onChange={ e => setLogin(e.target.value)}
                    />
                    <input 
                        placeholder="Nome" 
                        name={name}
                        onChange={ e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        name={email}
                        onChange={ e => setEmail(e.target.value)}
                        />
                    <input 
                        placeholder="Celular"
                        name={celular}
                        onChange={ e => setCelular(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Senha"
                            name={senha}
                            type="password"
                            onChange={ e => setSenha(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};