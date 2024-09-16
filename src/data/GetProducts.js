import productosJSON from './productos.json';

{/* Función asíncrona que devuelve una promesa con los productos. Además Simula el retraso de llamar a la API*/}
export const GetProducts = async () => {
    const timeout = "500"; {/* Un pequeño retraso para simular el llamado a una api*/}
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productosJSON)
        }, timeout);
    });

}