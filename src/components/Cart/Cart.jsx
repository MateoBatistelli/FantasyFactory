import styles from './Cart.module.css'

import CartItem from '../CartItem/CartItem';

import { useCartContext } from '../../context/cartContext'

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';



export default function Cart () {
    const [ tieneItems, setTieneItems] = useState(false)
    const { cart } = useCartContext()
    const navigate = useNavigate()

    const { vaciarCarrito } = useCartContext()
    //Función que tomé del contexto para eliminar todos los items delc arro
    const vaciarCarro = () => 
    {
        vaciarCarrito()
        navigate('/');
    }

    useEffect(() => {
        if(cart.length == 0){
            setTieneItems(false)
        }
        else{
            setTieneItems(true)
        }
    }, [cart]) 

    if(tieneItems){
        return(
            <div className={styles.carrito}>
                {cart.map(item =>
                    <CartItem key={item.id} item={item}/>
                )}
                <div className={styles.grupoBotones}>
                    <Button className={styles.buttonEliminar} onClick={vaciarCarro}>Vaciar Carrito</Button>
                    <Button className={styles.button} as={Link} to='/checkout'>Finalizar Compra</Button>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={styles.emptyCart}>
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className={styles.buttonVolver}>Regresar a la tienda</Link>
            </div>
        )
    }

}