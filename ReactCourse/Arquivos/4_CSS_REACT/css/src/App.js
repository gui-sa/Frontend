import './App.css';
import MyComponents from './components/MyComponents';

function App() {
  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS Component */}
      <MyComponents/>
      <p>Conflitos em CSS, mY mAN</p>
      <p className="fugindo-dos-vazamentos">Conflitos em CSS, tem que ser evitAAADOOS mY mAAN...</p>
    {/* INLINE CSS */}
    <p style={{color: "yellow", padding: "25px", borderTop: "2px solid red"}}>noooOOOOOOOOU WHY INLINEE???</p>
    </div>
  );
}

export default App;
