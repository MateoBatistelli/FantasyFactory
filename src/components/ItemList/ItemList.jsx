import styles from './ItemList.module.css'

import Item from '../Item/Item';

export default function ItemList ( { productos }){
    
    return(
        <div className={styles.itemLista}>
            {productos.map((producto) => (
                <Item key={producto.id} item={producto}/>
                
            ))}
        </div>
    )
}