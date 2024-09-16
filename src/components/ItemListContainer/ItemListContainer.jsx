import styles from './ItemListContainer.module.css'
import { GetProducts } from '../../data/GetProducts.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';

export default function ItemListContainer (){
    const [ loading, setLoading] = useState(true)
    const [ productos, setProductos] = useState([])
    const { categoriaID } = useParams()

    useEffect(() => {
        setLoading(true)
        GetProducts()
            .then((productosJSON) => {
                const productosArray = productosJSON.productos;
                if(categoriaID == undefined) { setProductos(productosArray); }
                else
                {
                    const productosFiltradosCategoria = productosArray.filter(productos => productos.categoriaid == categoriaID);
                    setProductos(productosFiltradosCategoria);
                } 
                setLoading(false)
            })
            .catch(err => console.error(err));
    }, [categoriaID]) 

    if (loading){
        return(
            <h4>Cargando . . .</h4>
        )
    }
    else
    {
        return(
            <div className={styles.listadoProductos}>
            <ItemList productos={productos}/>
            </div>
        )

    }
}