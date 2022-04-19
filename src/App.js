import logo from './logo.svg';
import './App.css';
import Saludo from './componentes/saludo';
import DaisyNavBar from './componentes/DaisyNavBar';
import CartWidget from './componentes/CartWidget';
import ItemListContainer from './componentes/ItemListContainer';
import Contador from './componentes/Contador';


function App() {


  return (
    <div className="App">
      <DaisyNavBar/>
      
      <h1 className="text-3xl font-bold underline text-amber-400">Hola React Mundo</h1>

      <Saludo name="Javier" edad='20' />
      
    </div>
  );
}

export default App;
