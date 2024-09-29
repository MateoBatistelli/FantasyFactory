import styles from './ItemCount.module.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { useCartContext } from '../../context/cartContext';

export default function ItemCount ({item}){
    const [cantidad, setCantidad] = useState(1)
    
    const { agregarAlCarrito } = useCartContext()

    const incrementar = () => {
        if(cantidad < item.stock) setCantidad(cantidad+1);
    }

    const disminuir = () => {
        if(cantidad > 1) setCantidad(cantidad-1);
    }

    //Función que tomé del contexto para agregar un item con su cantidad. En los parámetros desestructuro el objeto, para agregarle le parámetro de cantidad.
    const agregarProducto = () => agregarAlCarrito({...item, cantidad: cantidad})

    return(
        <div className={styles.itemCount}>
            <Button className={styles.button} onClick={disminuir}>-</Button>
            <h5 className={styles.cantidadComprar}>{cantidad}</h5>
            <Button className={styles.button} onClick={incrementar}>+</Button>
            <p className={styles.stockDisponible}>Stock: {item.stock}</p>
            <Button className={styles.button} onClick={agregarProducto} >Agregar al Carrito</Button>
        </div>
    )
}
