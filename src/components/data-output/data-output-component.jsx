import React from "react";

function DataOutput({ data, onRemoveData }){
    return(
        <div className="output-align">
            <h1>Usuários cadastrados</h1>
            <ul >
                {data.map((item, index) =>(
                    <li className="output-item-style" key={index}>
                        Nome: {item.nome} 
                        <br></br> 
                        Idade: {item.idade} anos 
                        <br></br> 
                        Email: {item.email}
                        <br></br>
                        <button onClick={() => onRemoveData(index)}>
                            Remover
                        </button>                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DataOutput;