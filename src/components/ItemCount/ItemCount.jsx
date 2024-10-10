import styles from './ItemCount.module.css'

import { useCartContext } from '../../context/cartContext';

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ItemCount ({item}){
    const [cantidad, setCantidad] = useState(1)
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    
    const { agregarAlCarrito } = useCartContext()

    const incrementar = () => {
        if(cantidad < item.stock) setCantidad(cantidad+1);
    }

    const disminuir = () => {
        if(cantidad > 1) setCantidad(cantidad-1);
    }

    //Función que tomé del contexto para agregar un item con su cantidad. En los parámetros desestructuro el objeto, para agregarle le parámetro de cantidad.
    const agregarProducto = () => 
    {
        agregarAlCarrito({...item, cantidad: cantidad})
        handleShow();
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    const handleCloseSeguir = () => 
    {
        setShow(false);
        navigate('/');
    }
    
    const handleCloseCarrito = () => 
    {
        setShow(false);
        navigate('/cart');
    }

    return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Se agregó el producto al carrito</Modal.Title>
                </Modal.Header>
                <Modal.Footer className={styles.modalFooter}>
                    <Button className={styles.button} onClick={handleCloseCarrito}>
                        Ir al carrito
                    </Button>
                    <Button className={styles.agregarButton} onClick={handleCloseSeguir}>
                        Seguir comprando
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className={styles.itemCount}>
                
                <div className={styles.cantidadContainer}>
                    <Button className={styles.button} onClick={disminuir}>-</Button>
                    <h5 className={styles.cantidadComprar}>{cantidad}</h5>
                    <Button className={styles.button} onClick={incrementar}>+</Button>
                    <p className={styles.stockDisponible}>Stock: {item.stock}</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Button className={styles.agregarButton} onClick={agregarProducto}>Agregar al Carrito</Button>
                </div>
            </div>
        </>
    )
}
