import styles from './ItemDetailContainer.module.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import { GetProducts } from '../../data/GetProducts.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer (){
    const [ loading, setLoading] = useState(true)
    const [ producto, setProducto] = useState()
    const { id } = useParams()

    useEffect(() => {
        GetProducts()
            .then((productosJSON) => {
                const productosArray = productosJSON.productos;
                if(id != undefined)
                {
                    const productoFiltradoID = productosArray.filter(productos => productos.id == id);
                    setProducto(productoFiltradoID[0]);
                } 
                setLoading(false)
            })
            .catch(err => console.error(err));
    }, [id]) 
    
    if (loading){
        return(
            <h4>Cargando . . .</h4>
        )
    }
    else
    {
        return(
            <div className={styles.contenedorItemDetalle}>
                <ItemDetail item={producto} />
            </div>
        )
    }
}