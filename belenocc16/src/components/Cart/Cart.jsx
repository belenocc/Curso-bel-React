import { cart } from '../../Cart'

function Cart() {

    const {  cartList, borrarCarrito  } = useContext(CartContext)



    return (
        <div>
            {  cartList.map(prod=> <li>{prod.name}   {prod.cantidad}</li>) }
            <button onClick={borrarCarrito} >Vaciar Carrito</button>
        </div>
    )
}

export default Cart
