import styles from './ItemDetail.module.css'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount.jsx';

export default function ItemDetail ( {item} ){
    return(
        <Card className={styles.card} key={item.id} >
            <Card.Img className={styles.cardImg} variant="top" src={item.miniatura} />
            <Card.Body className={styles.cardBody}>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Text>$ {item.precio}</Card.Text>
            </Card.Body>
            <ItemCount item={item}/>
        </Card>
    )
}