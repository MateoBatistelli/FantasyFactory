import styles from './CartItem.module.css'
import eliminar from './assets/trashcan.png';

import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

export default function Cart ( {item} ) {
    const { eliminarDelCarrito } = useCartContext()

    //Función que tomé del contexto para eliminar un item del carrito.
    const eliminarProducto = () => eliminarDelCarrito(item)

    return(
        <div className={styles.card} key={item.id} >
            <Link to={`/product/${item.id}`} className={styles.productoInfo}>
                <img className={styles.cardImg} src={item.miniatura} alt={item.titulo} />
                <div className={styles.cardBody}>
                    <h4>{item.titulo}</h4>
                    <p>$ {item.precio} x {item.cantidad}</p>
                </div>
            </Link>
            <img className={styles.btnEliminar} src={eliminar} alt='Eliminar' width='30' as={Button} onClick={eliminarProducto}/>
        </div>
    )
}