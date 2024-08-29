import styles from './NavBar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import logo from '/ff-logo.png'
import Dropdown from 'react-bootstrap/Dropdown';


export default function NavBar (){
    return(
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <img src={logo} alt='Logo' width='56'/>
                <h1>Fantasy Factory</h1>
            </div>

            <Dropdown className={styles.dropdown}>
            <Dropdown.Toggle className={styles.dropdownToggle} variant="secondary" id="dropdown-basic">
            Categorías
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.dropdownMenu}>
                <Dropdown.Item className={styles.dropdownItem} href="#">Cosplay Completo</Dropdown.Item>
                <Dropdown.Item className={styles.dropdownItem} href="#">Accesorios</Dropdown.Item>
                <Dropdown.Item className={styles.dropdownItem} href="#">Ropa Casual Temática</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <div className={styles.carritoCompras}>
                <CartWidget />
            </div>
        </div>
    )
}