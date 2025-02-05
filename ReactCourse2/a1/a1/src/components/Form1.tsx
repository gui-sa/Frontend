import { useState } from "react";

export function Form1(){

    const [inputUserName, setInputUserName] = useState("");

    function handleClick (){
        alert(`Usuario ${inputUserName} clicou!`);
    }

    return(
        <>
            <input 
                type="text" 
                placeholder="Digite o Nome"
                value={inputUserName}
                onChange={(e)=>{setInputUserName(e.target.value)}}
                name="nome" 
                id="usuario-nome" />

            <button
                onClick={handleClick} 
                type="button">Clique Aqui para gerar um alerta</button>
        </>

    );
}