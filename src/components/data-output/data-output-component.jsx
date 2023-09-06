import React from "react";

function DataOutput({ data, onRemoveData }){
    return(
        <div>
            <ul className="output-align">
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