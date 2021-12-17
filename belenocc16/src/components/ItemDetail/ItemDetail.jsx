import {useState, useContext} from 'react'

function ItemDetail({prod}) {
    const [count, setCount] = useState(0)

    const {cartList ,agregarAlCarrito}= useContext(CartContext)

    function onAdd (cant){
        console.log(cant)
        agregarAlCarrito( {...prod, cantidad:cant}) 
    }
    
    console.log(cartList);
    return (
                     
                <div className='card w-50'>
                    <div className="container">
                        <label>{prod.title}</label>
                    </div>
                    <div className="container">
                        <img  src={prod.foto} className="w-25" alt="foto" />
                        <br/>
                        <label>{prod.descripcion}</label><br/>
                        <label>{prod.categoria}</label>
                    </div>
                    <div className="container">
                        <label>{prod.price}</label>
                    </div>
                </div>

       
    )
}

export default ItemDetail
