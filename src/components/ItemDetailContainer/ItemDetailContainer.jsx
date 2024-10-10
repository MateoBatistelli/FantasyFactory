import styles from './ItemDetailContainer.module.css'

import ItemDetail from '../ItemDetail/ItemDetail';

import { getDocumento } from '../../firebase/db.js';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OrbitProgress } from 'react-loading-indicators';

export default function ItemDetailContainer (){
    const [ loading, setLoading] = useState(true)
    const [ producto, setProducto] = useState()
    const { id } = useParams()

    const getDatos = async () => {
        setLoading(true);

        const producto = await getDocumento(id, "productos");
        setProducto(producto);

        setLoading(false); 
    };

    useEffect(() => {
        getDatos();
    }, [id]) 
    
    if (loading){
        return(
            <OrbitProgress color="#525252" size="medium" text="" textColor="" />
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