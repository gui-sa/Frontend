//Components
import UserDetails from './components/UserDetails';
//CSS Files
import './App.css';


function App() {

  const pessoas = [
    {id: 1, nome: "Mario", idade: 70 , profissao: "Pedreiro"},
    {id: 2, nome: "Ana", idade: 32, profissao: "Tecnico em Quimica"},
    {id: 2, nome: "Enzo", idade: 13, profissao: "Estudante"},
    {id: 3, nome: "Joaquina", idade: 95, profissao: "None"}
];

  return (
    <div className="App">
      <h1>Desafio</h1>
      <UserDetails pessoas={pessoas}/>
    </div>
  );
}

export default App;
