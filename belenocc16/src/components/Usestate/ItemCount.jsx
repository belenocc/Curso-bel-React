import React, {useState} from 'react'

const Itemcount=({max, inicial}) => {

    const [value,setValue] =useState(inicial)

    const handlerSuma = () => {
        value < max ? setValue=(prev => prev +valor) : alert ('compra maxima')
        }


    const handlerResta =() => {
        value > inicial? setValue=(prev => prev -1) : alert ('compra minima')
    }

    useEffect(() => {
        
        handlerSuma(2)
    }, [value])

    
    return (
        <div>
            <h1>{value}</h1>
            <button onClick= { () => handlerSuma (2)}> + </button>
            <button onClick= { () => handlerResta(2)}>-</button>
        </div>
    )
}


export default Itemcount
