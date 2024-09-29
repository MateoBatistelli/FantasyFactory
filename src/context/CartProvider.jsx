import { useContext, useState } from "react"
import { cartContext } from "./cartContext"

export default function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    //Uso el spread ("...") para indicarle que mantenga todo lo que ya tiene el array del carro
    const agregarAlCarrito = producto => setCart([...cart, producto])
    //TODO: Hacer que esta función se fije sobre el id si ya agregó el producto, y si lo agregó, sumarle la cantidad al producto. También tendría que checkear que no pase del límite del stock que impuso el vendedor

    return(
        <cartContext.Provider value={{ cart, agregarAlCarrito }}>
            {children}
        </cartContext.Provider>
    )
}