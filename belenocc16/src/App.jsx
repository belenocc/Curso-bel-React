import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <center>
      <NavBar/>
      <ItemListContainer greeting='Hola! Bienvenidos'/>

    </center>
  );
}

export default App;
