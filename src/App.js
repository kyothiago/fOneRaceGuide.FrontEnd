// import Axios from 'axios';
import React, {useState,useEffect} from 'react';
import Routes from "./routes";
import './App.css';
import "./global.css";



function App() {

  return <Routes />
}

//   const [usuarioLogin, setLogin] = useState('');
//   const [usuarioNome, setNome] = useState('');
//   const [usarioEmail, setEmail] = useState([]);
//   const [usarioSenha, setSenha] = useState([]);
//   const [usarioCelular, setCelular] = useState([]);


//   useEffect( () => {
//     Axios.get('http://localhost:3001/api/get')
//     .then((response) => {
//       setListaContatos(response.data)
//     });
//   }, [])


//   const cadastrar = () => {
//     Axios.post('http://localhost:3001/usr/add', 
//       {
//         login: login,
//         nome: nome,
//         email: email,
//         senha: senha,
//         celular: celular
//       }
//     )
//     .then(()=> {
//       res.send('Sucesso')
//     })
//   }

//   const apagarUsuario = (usuarioId) => {
//     Axios.delete(`http://localhost:3001/usr/delete/${usuarioId}`)
//     .then(() => {
//       res.send('Ok')
//     })
//   }

//   const atualizarUsuario= (usuarioId) => {
//     Axios.put(`http://localhost:3001/usr/${usuarioId}`, 
//     {
//       login: login,
//       nome: nome,
//       email: email,
//       senha: senha,
//       celular: celular
//     })
//     .then(() => {
//       Axios.get('http://localhost:3001/api/get')
//       .then(() => {
//         res.send('Conta Atualizada com sucesso')
//       });
//     });

//     setNovoCelular("");
//   }

//   return (
//     <div className="App">
//       <h1>Cadastro</h1>
//       <div className="form">
//         <label>Login de Usuário:</label>
//         <input type="text" name="login" onChange={
//           (event) => {
//             setLogin(event.target.value);
//           }
//         }/>

//          <label>Nome:</label>
//         <input type="text" name="nome" onChange={
//           (event) => {
//             setNome(event.target.value);
//           }
//         }/>

//          <label>E-mail:</label>
//         <input type="text" name="email" onChange={
//           (event) => {
//             setEmail(event.target.value);
//           }
//         }/>

//         <label>Senha:</label>
//         <input type="text" name="senha" onChange={
//           (event) => {
//             setSenha(event.target.value);
//           }
//         }/>

//         <label>Celular:</label>
//         <input type="text" name="celular" onChange={
//           (event) => {
//             setCelular(event.target.value);
//           }
//         }/>        

//         <button onClick={cadastrar}>Cadastrar</button>

//         {
//           listaContatos.map((contato) => {
//             return (
//               <div className="lista">
//                 <h1>{contato.nome}</h1>
//                 <p>{contato.celular}</p>
//                 <p>{contato.email}</p>

//                 <button onClick={ () => {
//                   apagarContato(contato.nome)
//                 }}>Excluir</button><br></br>

//                 <input type="text" id="celularUpdate" onChange={
//                   (event) => {
//                     setNovoCelular(event.target.value);
//                   }
//                 }/>
//                 <button onClick={() => {
//                   atualizarCelular(contato.nome);
//                 }}>Atualizar</button>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   );
// }

export default App;