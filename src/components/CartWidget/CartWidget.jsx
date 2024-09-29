import styles from './CartWidget.module.css'
import carrito from './assets/cart.svg';
import { useCartContext } from '../../context/cartContext';

export default function CartWidget (){

    const { cart } = useCartContext()

    return(
        <>
            {/* El carrito se compone por la imagen y el círculo que indica la cantidad */}
            <div className={styles.carrito}>
                <img src={carrito} alt='Carrito' width='30'/>
                <span className={styles.circuloNotificacion}>{cart.length}</span>
            </div>
        </>
    )
}