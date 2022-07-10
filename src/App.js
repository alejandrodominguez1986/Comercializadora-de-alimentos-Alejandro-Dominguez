import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App container-fluid">
      <Navbar/>
      <ItemListContainer greeting ={"A poco no llego"} />
      
    </div>
  );
}

export default App;
