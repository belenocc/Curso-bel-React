import {useParams} from 'react-router-dom'

function ItemDetailContainer () {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            Item Detail Container
        </div>
    )
}

export default ItemDetailContainer
