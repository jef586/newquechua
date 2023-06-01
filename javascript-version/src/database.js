// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// import { WordStore } from "./store/index"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.measurementId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
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
  //   PedidoStore.data.pedido = pedidosList
    // WordStore.methods.addnewdata(pedidosList)
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
  
  