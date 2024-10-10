import styles from './Checkout.module.css'

import CheckoutItem from '../CheckoutItem/CheckoutItem'

import { useCartContext } from '../../context/cartContext'
import { addColeccion } from '../../firebase/db';

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { serverTimestamp } from 'firebase/firestore';

import { Button } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Checkout () {
    const { cart, calcularTotal, vaciarCarrito } = useCartContext()
    const [ tieneItems, setTieneItems] = useState(false)
    const [show, setShow] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const navigate = useNavigate()
    
    const total = calcularTotal();

    const handleClose = () => {
        setShow(false);
        vaciarCarrito();
        navigate('/');
    };

    const handleShow = () => setShow(true);

    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        const email = e.target.formGroupEmail.value
        const nombre = e.target.formGroupNombre.value
        const telefono = e.target.formGroupTelefono.value

        const order = {
            comprador: {email, nombre, telefono},
            items: cart,
            date: serverTimestamp(),
            total: total
        }
        
        try {
            const response = await addColeccion("orders", order);
            setOrderId(response);
            handleShow();
        } catch (error) 
        {
            console.error("Error al crear la orden:", error);
        }
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
            <>
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>Se realizó con éxito la compra</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Código de órden: {orderId}</Modal.Body>
                    <Modal.Footer>
                    <Button className={styles.button} onClick={handleClose}>
                        Ok
                    </Button>
                    </Modal.Footer>
                </Modal>
    
                <div className={styles.checkout}>
                    <div>
                        <div className={styles.itemsResumen}>
                            {cart.map(item =>
                                <CheckoutItem key={item.id} item={item}/>
                            )}
                            <div className={styles.infoCompra}>
                                <p>Total: ${total}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="juan.rodriguez@gmail.com" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupTelefono">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="text" placeholder="Teléfono" required/>
                            </Form.Group>
                            <Button className={styles.button} type="submit">Finalizar Compra</Button>
                            <Button className={styles.buttonEliminar} as={Link} to='/cart'>Cancelar</Button>
                        </Form>
                    </div>
    
                </div>
            </>
        )
    }
    else{
        return(
            <div className={styles.emptyCart}>
                <h2>Error al realizar la compra, el carrito está vacío</h2>
                <Link to="/" className={styles.buttonVolver}>Regresar a la tienda</Link>
            </div>
        )
    }
}