import { useContext, useState } from "react"
import { cartContext } from "./cartContext"

export default function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const agregarAlCarrito = producto => {
        //Devuelve el producto, si lo encontró
        const productoEnCarrito = cart.find(item => item.id === producto.id);

        //Si viene con algo, es porque ya había agregado el producto
        if (productoEnCarrito) {
            
            if (productoEnCarrito.cantidad + producto.cantidad <= producto.stock) {
                
                //Busco de nuevo el producto en el cart, y actualizo la cantidad. Si el item que encuentra no coincide con el id, no hace nada.
                setCart(cart.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + producto.cantidad } : item));
            } else {
                //Si se pasa del máximo, actualizo la cantidad que quiere al máximo posible
                setCart(cart.map(item => item.id === producto.id ? { ...item, cantidad: producto.stock } : item));
            }
        } else 
        { // Si no, lo agrego de una

            //Uso el spread ("...") para indicarle que mantenga todo lo que ya tiene el array del carro
            setCart([...cart, producto]);
        }

    }

    const eliminarDelCarrito = producto => {
        //Devuelve el producto, si lo encontró
        const productoEnCarrito = cart.find(item => item.id === producto.id);

        if (productoEnCarrito) {
            //Filtro el array quitando el producto que coincida.
            setCart(cart.filter(item => item.id !== producto.id));
        }
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    const calcularTotal = () => {
        let total = 0;

        cart.forEach(item => {
            total += item.precio * item.cantidad
        })
        
        return total;
    }

    return(
        <cartContext.Provider value={{ cart, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, calcularTotal }}>
            {children}
        </cartContext.Provider>
    )
}