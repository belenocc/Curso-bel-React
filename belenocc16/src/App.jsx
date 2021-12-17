import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/Usestate/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'

const App = () => {
  const inicial =1
  const max= 10

  
  return (
        <BrowserRouter>
            <center>
                <NavBar /> 
                <Routes>
                    <Route 
                        exact
                        path="/" 
                        element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
                    />
                    <Route 
                        exact
                        path="/categoria/:idCate" 
                        element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
                    />                  
                    <Route 
                        exact
                        path="/detalle/:id" 
                        element={ <ItemDetailContainer />} 
                    />                  
                    <Route 
                        exact
                        path="/cart" 
                        element={ <Cart />} 
                    />   
                    
                </Routes>           
            </center>
        </BrowserRouter>  
)
}

export default App;
