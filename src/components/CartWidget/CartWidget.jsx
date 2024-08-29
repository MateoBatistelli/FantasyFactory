import styles from './CartWidget.module.css'
import carrito from './assets/cart.svg';

export default function CartWidget (){
    return(
        <>
            {/* El carrito se compone por la imagen y el círculo que indica la cantidad */}
            <div className={styles.carrito}>
                <img src={carrito} alt='Carrito' width='30'/>
                <span className={styles.circuloNotificacion}>0</span>
            </div>
        </>
    )
}