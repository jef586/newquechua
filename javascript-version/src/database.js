// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { useWordStore } from "@/store/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAOjuGGNB8UH7A345nE1JSkNRmAqn3BYU",
  authDomain: "diccionario-quechua-es.firebaseapp.com",
  projectId: "diccionario-quechua-es",
  storageBucket: "diccionario-quechua-es.appspot.com",
  messagingSenderId: "358418614116",
  appId: "1:358418614116:web:8e9005192c45660e945c71",
  measurementId: "G-8PV2GBMJ1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getAll = async ()=> {
    const querySnapshot = await getDocs(collection(db, "words"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().Quechua}`);
    });
    const pedidosList = querySnapshot.docs.map(doc => doc.data());
    const words = useWordStore()
    words.word = pedidosList
    // PedidoStore.data.pedido = pedidosList
    useWordStore.methods.addnewdata(pedidosList)
    
    console.log(pedidosList);
    return pedidosList;
    
}
  
//   const dbRef = collection(db, "pedidos");
//   const data = PedidoStore.data.pedido
//   // const objeto =  Object.assign({}, data)
  
//   export const addPedido = async ()=> {
//       await addDoc(dbRef, ...data);
//       console.log("Document written with ID: ", dbRef.id);
//   }
  
  