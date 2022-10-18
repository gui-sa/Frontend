//components
import TemplateExpressions from './components/TemplateExpressions';
import FirstComponent from './components/FirstComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

//styles / css
import './App.css';



function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
