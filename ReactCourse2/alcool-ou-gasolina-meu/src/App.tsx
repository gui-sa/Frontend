import { useState } from 'react';
import style from "./app.module.css";
import Bomba from "./assets/logo.png";
import { NumberInput } from './components/NumberInput/NumberInput';
import { Button } from './components/Button/Button';


function App() {
  const [precoGasolina, setPrecoGasolina] = useState<number>(0);
  const [precoAlcool, setPrecoAlcool] = useState<number>(0);
  const [openResult, setOpenResult] = useState<boolean>(false);

  const compararGasolinaAlcool = ()=>{

    if((precoAlcool/precoGasolina)>0.7){
      return (<h2>Compre Gasolina</h2>)
    }else{
      return (<h2>Compre Alcool</h2>)
    }
  }

  return (
    <div className={style.container}>
      <h1>Vale a pena Alcóol ou Gasolina?</h1>
      <img src={Bomba} alt="Uma bomba de combustível" />
      <form className={style.form}>

          <NumberInput
            label='Preço da Gasolina:'
            name='gasolina'
            value={precoGasolina}
            setValue={setPrecoGasolina}
            placeholder='Digite aqui o preço da gasolina'
            id='preco-gasolina'
            />
          <NumberInput
            label='Preço do Alcool:'
            name='alcool'
            value={precoAlcool}
            setValue={setPrecoAlcool}
            placeholder='Digite aqui o preço do Alcool'
            id='preco-alcool'
            />
          {compararGasolinaAlcool()}

          
      </form>
    </div>
  )
}

export default App
