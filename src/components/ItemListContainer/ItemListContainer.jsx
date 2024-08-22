import './ItemListContainer.css'

export default function ItemListContainer ({mensaje}){
    return(
        <div className='listado-productos'>
            <p>{mensaje}</p>
        </div>
    )
}