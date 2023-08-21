import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDoi_LXh_cvf9TKK2Zy5eZwLgiKwFdFTuc",
  authDomain: "skullandy-40e5a.firebaseapp.com",
  projectId: "skullandy-40e5a",
  storageBucket: "skullandy-40e5a.appspot.com",
  messagingSenderId: "1014070312521",
  appId: "1:1014070312521:web:b6b9ed2257d728bddfc998"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const productsCollectionRef = collection(db, "products")


export async function getProducts() {
  const querySnapshot = await getDocs(productsCollectionRef)
  const dataArr = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
  }))
  console.log(dataArr)
  return dataArr
}

export async function getProduct(id) {
  const docRef = doc(db, "products", id)
  const productSnapshot = await getDoc(docRef)
  return {
      ...productSnapshot.data(),
      id: productSnapshot.id
  }
}



/*export async function getProducts(id) {
  const url = id ? `/api/products/${id}` : "/api/products"
  const res = await fetch(url)
  if (!res.ok) {
    throw{
        message: "Failed to fetch products", 
        statusText: res.statusText,
        status: res.status
    }
}
  const data = await res.json()
  return data.products
}
*/


export async function loginUser(creds) {
  const res = await fetch("/api/login",
      { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
      throw {
          message: data.message,
          statusText: res.statusText,
          status: res.status
      }
  }
  return data
}

