import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import logo from '/ff-logo.png'


export default function NavBar (){
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt='Logo' width='56'/>
                <h1>Fantasy Factory</h1>
            </div>

            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categorías
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Cosplay Completo</a>
                    <a className="dropdown-item" href="#">Accesorios</a>
                    <a className="dropdown-item" href="#">Ropa Casual Temática</a>
                </div>
            </div>

            <div className='carrito-compras'>
                <CartWidget />
            </div>
        </div>
    )
}