import styles from './ItemDetail.module.css'

import ItemCount from '../ItemCount/ItemCount.jsx';

import Card from 'react-bootstrap/Card';

export default function ItemDetail ( {item} ){
    return(
        <Card className={styles.card} key={item.id} >
            <Card.Img className={styles.cardImg} variant="top" src={item.miniatura} />
            <div className={styles.cardInfo}>

            <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>{item.titulo}</Card.Title>
                <Card.Text className={styles.cardPrice}>$ {item.precio}</Card.Text>
            </Card.Body>
            <ItemCount item={item}/>
            </div>
        </Card>
    )
}