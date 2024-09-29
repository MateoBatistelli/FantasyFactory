import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config";

//getFirestore crea una instancia de mi base de datos, para acceder a ella utilizo db
const db = getFirestore(app);

export const getColeccion = async (coleccion) => {
    const querySnapshot = await getDocs(collection(db, coleccion));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
}
