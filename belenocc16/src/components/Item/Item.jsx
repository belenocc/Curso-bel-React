import {Link} from 'react-router-dom'

function Item({prod}) {
    return (
        <div
             key={prod.id}
             className='col-md-4'>
            
             <div className="flex bg-info">
                 <div className="card-header">
                      {`${prod.name} - ${prod.categoria}`}
                 </div>

                 <div className="card-body">
                     <img src={prod.foto} alt='' className='w-50'/>
                     <h3>{prod.price}</h3>
                 </div>

                <div className="card-footer">
                <Link to={`/detalle/${prod.id}`}>
                    <button className="btn btn-outline-primary btn-block">
                        detalle del producto
                    </button>
                </Link>          

                </div>       
             </div>
        </div>
    )
}

export default Item
