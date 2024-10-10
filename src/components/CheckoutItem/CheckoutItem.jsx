import styles from './CheckoutItem.module.css'

export default function CheckoutItem ( {item} ) {
    return(
        <div className={styles.card} key={item.id} >
            <img className={styles.cardImg} src={item.miniatura} />
            <div className={styles.cardBody}>
                <h4>{item.titulo}</h4>
                <p>$ {item.precio} x {item.cantidad}</p>
            </div>
        </div>
    )
}