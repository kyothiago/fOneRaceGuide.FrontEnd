import React from 'react';
import Axios from 'axios';
import React, {useState,useEffect} from 'react';

export function Cadastrar(){

    const [usuarioLogin, setLogin] = useState('');
    const [usuarioNome, setNome] = useState('');
    const [usarioEmail, setEmail] = useState([]);
    const [usarioSenha, setSenha] = useState([]);
    const [usarioCelular, setCelular] = useState([]);

    return (
        <div className="App">
            <h1>Cadastro</h1>
            <div className="form">
                <label>Login de Usuário:</label>
                <input type="text" name="login" onChange={
                    (event) => {
                        setLogin(event.target.value);
                    }
                } />

                <label>Nome:</label>
                <input type="text" name="nome" onChange={
                    (event) => {
                        setNome(event.target.value);
                    }
                } />

                <label>E-mail:</label>
                <input type="text" name="email" onChange={
                    (event) => {
                        setEmail(event.target.value);
                    }
                } />

                <label>Senha:</label>
                <input type="text" name="senha" onChange={
                    (event) => {
                        setSenha(event.target.value);
                    }
                } />

                <label>Celular:</label>
                <input type="text" name="celular" onChange={
                    (event) => {
                        setCelular(event.target.value);
                    }
                } />

                <button onClick={cadastrar}>Cadastrar</button>
    );
}