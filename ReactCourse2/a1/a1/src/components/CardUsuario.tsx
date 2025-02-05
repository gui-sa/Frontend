import { useState } from "react";
import { alunoProps } from "../types";


interface cardUsuarioProps {
    submitHandler:Function,
    usuarioSelecionado?:alunoProps
}

export function CardUsuario({submitHandler,usuarioSelecionado}:cardUsuarioProps){
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [idadeUsuario, setIdadeUsuario] = useState(0);
    const [bioUsuario, setBioUsuario] = useState("");

    return(
        <>
            {usuarioSelecionado&&
                <div>
                <h2>{usuarioSelecionado.nome}</h2>
                <h3>{usuarioSelecionado.idade}</h3>
                {usuarioSelecionado?.bio &&
                    <h3>{usuarioSelecionado.bio}</h3>}
                </div>}
            <input 
                type="text" 
                name="nome" 
                placeholder="Nome"
                value={nomeUsuario}
                onChange={(e)=>setNomeUsuario(e.target.value)}
                id="usuario-nome" />
            <input 
                type="number" 
                name="idade" 
                placeholder="Idade"
                value={idadeUsuario}
                onChange={(e)=>setIdadeUsuario(Number(e.target.value))}
                id="usuario-idade" />
            <input 
                type="text" 
                name="bio" 
                placeholder="Biografia"
                value={bioUsuario}
                onChange={(e)=>setBioUsuario(e.target.value)}
                id="usuario-nome" />
            <button 
                onClick={()=>{submitHandler({nome:nomeUsuario,idade:idadeUsuario, bio:bioUsuario})}}
                >Criar Usuario</button>
        </>
    );
}