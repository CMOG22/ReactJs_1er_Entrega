// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIgZoenWBY2MlF21YL7tez1xwJnP19xSI",
  authDomain: "proyecto-57ed2.firebaseapp.com",
  projectId: "proyecto-57ed2",
  storageBucket: "proyecto-57ed2.appspot.com",
  messagingSenderId: "616357824147",
  appId: "1:616357824147:web:382b976096e5afda8fef66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//consultar base de datos
const bdd = getFirestore()

// crud de produsctos
export const createProducts =async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), { //Si existe la coleccion te agrega nuevos productos a la misma, si no te crea la coleccion y te envia estos productos
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img,
            detalle: prod.detalle
        })
    })
}

export const getProducts = async () => {
    const prods = await getDocs(collection(bdd, "productos"))
    const items = prods.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProduct = async (id) => {
    const prod = await getDoc(doc(bdd, "productos", id))
    const item = { ...prod.data(), id: prod.id }
    return item
}

//Tanto Update como Delete no devuelven un estado
export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}
export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}


// CREATE y READ OrdenCompra
export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    console.log(ordenCompra)
    //return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    //console.log(item)
    return item
}

/*
export const deleteOrdenCompra = async (id) => {
    await deleteDoc(doc(bdd, "ordenCompra", id))
}
*/