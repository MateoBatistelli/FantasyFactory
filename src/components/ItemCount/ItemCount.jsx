import styles from './ItemCount.module.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'

export default function ItemCount ({item}){
    const [cantidad, setCantidad] = useState(1)
    
    const incrementar = () => {
        if(cantidad < item.stock) setCantidad(cantidad+1);
    }

    const disminuir = () => {
        if(cantidad > 1) setCantidad(cantidad-1);
    }

    return(
        <div className={styles.itemCount}>
            <Button className={styles.button} onClick={incrementar}>+</Button>
            <h5 className={styles.cantidadComprar}>{cantidad}</h5>
            <Button className={styles.button} onClick={disminuir}>-</Button>
            <p className={styles.stockDisponible}>Stock: {item.stock}</p>
        </div>
    )
}
