import { initializeApp } from "firebase/app";
import { getFirestore, addDoc,doc, collection, getDocs, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArxctFJA5UtUezaC7kKDXJh3YQR7_WEk0",
  authDomain: "ecommerce-gameshop.firebaseapp.com",
  projectId: "ecommerce-gameshop",
  storageBucket: "ecommerce-gameshop.appspot.com",
  messagingSenderId: "451049051850",
  appId: "1:451049051850:web:eb2597562ff29e160c4633",
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

const loadBDD = async () => {
  const promise = await fetch("./json/data.json");
  const products = await promise.json();
  products.forEach(async (prod) => {
    await addDoc(collection(database, "products"), {
      idCategory: prod.idCategory,
      name: prod.name,
      price: prod.price,
      image: prod.img,
      description: prod.description,
      stock: prod.stock,
      logo: prod.logo,
    });
  });
};


const getProducts = async () => {
  const productos = await getDocs(collection(database, "products"));
  const items = productos.docs.map(prod => {return  {id: prod.id, ...prod.data()}})
  return items;
};



const getProduct = async (id) => {
  try {
    const prodRef = doc(database, "products", id);
    const prodSnapshot = await getDoc(prodRef);

    if (prodSnapshot.exists()) {
      const prodData = prodSnapshot.data();
      const item = { ...prodData, id: prodSnapshot.id };
      console.log(item)
      return item;
    } else {
      return "Producto no encontrado";
    }
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    throw error;
  }
};

export { loadBDD, getProducts, getProduct};
