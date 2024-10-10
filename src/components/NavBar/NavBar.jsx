import styles from './NavBar.module.css'
import logo from '/ff-logo.png'

import CartWidget from "../CartWidget/CartWidget"

import { Link, NavLink } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';


export default function NavBar (){
    return(
        <div className={styles.navbar}>
            <Link className={styles.navbarLogo} to={"/"}>
                <img src={logo} alt='Logo' width='56'/>
                <h1 className={styles.navbarLogoTexto}>Fantasy Factory</h1>
            </Link>

            <Dropdown className={styles.dropdown}>
            <Dropdown.Toggle className={styles.dropdownToggle} id="dropdown-basic">
            Categorías
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.dropdownMenu}>
                {/* Uso la prop "as" para hacer que el componente Dropdown.Item se comporte como el componente Link, pero usa los estilos del original */}
                <Dropdown.Item className={styles.dropdownItem} as={NavLink} to={"/categoria/Accesorios"}>Accesorios</Dropdown.Item>
                <Dropdown.Item className={styles.dropdownItem} as={NavLink} to={"/categoria/Cosplay"} >Cosplay</Dropdown.Item>
                <Dropdown.Item className={styles.dropdownItem} as={NavLink} to={"/categoria/Cosplay-Completo"} >Cosplay Completo</Dropdown.Item>
                <Dropdown.Item className={styles.dropdownItem} as={NavLink} to={"/categoria/Ropa-Casual-Tematica"}>Ropa Casual Temática</Dropdown.Item>
                {/* TODO: Ahora mismo hardcodee las categorías, idealmente el día de mañana haría un abm de las categorías, revisar esto. */}
                {/* TODO: No puedo cambiarle el color del active, ni aunque le agregue clases, ver después como puedo solucionarlo. */}
            </Dropdown.Menu>
            </Dropdown>

            <div className={styles.carritoCompras}>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>
            </div>
        </div>
    )
}