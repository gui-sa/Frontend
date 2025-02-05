import { useState } from 'react';

import {Header} from './components/Header';
import { Form1 } from './components/Form1';
import { CardUsuario } from './components/CardUsuario';
import {alunoProps} from './types.ts';

export default function App(){

  const [selecionaUsuario, setSelecionaUsuario] = useState<alunoProps>();

  function criarUsuario({nome, idade, bio}:alunoProps):void{
    setSelecionaUsuario({
        nome:nome,
        idade:idade,
        bio:bio
    })
}

  return(
    <>
        <Header/>
        <Header title={"Yeah"} />
        <Form1/>
        <CardUsuario
          submitHandler={criarUsuario}
          usuarioSelecionado={selecionaUsuario}/>
    </>
  )
}


