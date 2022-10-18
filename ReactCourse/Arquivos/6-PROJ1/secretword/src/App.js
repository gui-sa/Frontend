"strict mode"
import { useState } from 'react';


//styles
import './App.css';

//components


//data
import {wordsList} from "./data/words.js"

//--------------

const States = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"},
];

function App() {
  const [GameState , setGameState] = useState(States[0].id);
  const [ Words , setWords] = useState(wordsList);



  return (
    <div className="App">
      <div id="cover">
        
      </div>
    </div>
  );
}

export default App;
