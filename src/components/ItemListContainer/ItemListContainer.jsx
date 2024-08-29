import styles from './ItemListContainer.module.css'

export default function ItemListContainer ({mensaje}){
    return(
        <div className={styles.listadoProductos}>
            <p>{mensaje}</p>
        </div>
    )
}