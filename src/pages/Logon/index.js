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