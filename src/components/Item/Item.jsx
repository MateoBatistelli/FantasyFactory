import { Link } from 'react-router-dom';
import styles from './Item.module.css'
import Card from 'react-bootstrap/Card';

export default function Item ({ item }){

    return(
        <Link className={styles.link} to={`/product/${item.id}`}>
            <Card className={styles.card} key={item.id} >
                <Card.Img className={styles.cardImg} variant="top" src={item.miniatura} />
                <Card.Body className={styles.cardBody}>
                    <Card.Title>{item.titulo}</Card.Title>
                    <Card.Text>$ {item.precio}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}