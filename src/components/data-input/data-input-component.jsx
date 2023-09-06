import React from "react";
import { useState } from "react";

function DataInput ({ onSendData })  {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');

    const sendData = () =>{
        const data = {
            nome,
            idade,
            email,
        };
        onSendData(data);
        setNome('');
        setIdade('');
        setEmail('');
    };
    
    return(
        <div className="input-align">
            <h1>Preencha os dados</h1>
            <div className="input-item-style">               
                <label htmlFor="nome">
                    Digite um nome:
                </label>
                <br></br>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}  
                    id="nome"                  
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div className="input-item-style">
                <label htmlFor="idade">
                    Digite uma idade:
                </label>
                <br></br>
                <input
                    type="number"
                    placeholder="Idade"
                    value={idade}
                    id="idade"
                    onChange={(e) => setIdade(e.target.value)}
                />                
            </div>        
            <div className="input-item-style"> 
                <label htmlFor="email">
                    Digite um e-mail:
                </label>
                <br></br>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>            
            <button onClick={sendData}>
                Enviar
            </button>
        </div>
    );
}

export default DataInput;