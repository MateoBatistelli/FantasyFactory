import styles from './ItemListContainer.module.css'

import ItemList from '../ItemList/ItemList.jsx';

import { getColeccion } from '../../firebase/db.js';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { OrbitProgress } from 'react-loading-indicators';

export default function ItemListContainer (){
    const [ loading, setLoading] = useState(true)
    const [ productos, setProductos] = useState([])
    const { categoriaID } = useParams()

    const getDatos = async () => {
        setLoading(true);

        const productosArray = await getColeccion("productos");
        
        if(categoriaID == undefined) { setProductos(productosArray); }
        else
        {
            const productosFiltradosCategoria = productosArray.filter(productos => productos.categoriaid == categoriaID);
            setProductos(productosFiltradosCategoria);
        }

        setLoading(false); 
    };

    useEffect(() => {
        getDatos();
    }, [categoriaID]) 

    if (loading){
        return(
            <OrbitProgress color="#525252" size="medium" text="" textColor="" />
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