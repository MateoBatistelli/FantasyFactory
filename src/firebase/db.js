import { app } from "./config";
import { getFirestore, collection, getDocs, getDoc, addDoc, doc } from "firebase/firestore";

//getFirestore crea una instancia de mi base de datos, para acceder a ella utilizo db
const db = getFirestore(app);

export const getColeccion = async (coleccion) => {
    const querySnapshot = await getDocs(collection(db, coleccion));
    const items = []
    
    querySnapshot.forEach((doc) => {
        items.push(doc.data())
    });
    
    return items
}

export const getDocumento = async ( id, coleccion ) => {
  const docRef = doc(db, coleccion, id);
  const docSnap = await getDoc(docRef);
  let item = null
  
  if (docSnap.exists()) {
    item = docSnap.data();
   
  } else {
    console.log("No such document!");
  }

  return item
}

export const addColeccion = async (coleccion, datos) =>{

    try 
    {
      const docRef = await addDoc(collection(db, coleccion), datos);
      
      return docRef.id;
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}
