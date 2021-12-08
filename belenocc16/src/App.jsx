import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/Usestate/ItemCount';

const App = () => {
  const inicial =1
  const max= 10

  return (
    <center>
      <NavBar/>
      <ItemListContainer greeting='Hola! Bienvenidos'/>
      <ItemCount inicial={inicial} max={max} />
    </center>
  );
}

export default App;
