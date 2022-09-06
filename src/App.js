import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting';
import GreetingFunction from './components/pure/greeting-function';
import TaskList from './components/task-list';
import EjemploHook from './components/ejemplo-hook';
import EjemploHook2 from './components/ejemplo-hook2';
import ComponenteConContexto from './components/componente-context';
import GreetingStyled from './components/pure/forms/greetingStyled';

function App() {
  return (
    <div className="App">
        <TaskList></TaskList>
        <ComponenteConContexto></ComponenteConContexto>
        <GreetingStyled name="Francisco"></GreetingStyled>
    </div>
  );
}

export default App;
