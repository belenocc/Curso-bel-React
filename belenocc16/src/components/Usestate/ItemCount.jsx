import React, {useState} from 'react'

const Itemcount=({max, inicial}) => {

    const [value,setValue] =useState(inicial)

    const handlerSuma = () => {
        value < max ? setValue(value + 1) : alert('compra maxima');
      };
    
    
      const handlerResta = () => {
        value > inicial ? setValue(value - 1) : alert('compra minima');
      };
    
    return (
        <div>
            <h1>{value}</h1>
            <button onClick= { () => handlerResta(2)}>-</button>
            <button onClick= { () => handlerSuma (2)}> + </button>
        </div>
    )
}


export default Itemcount
