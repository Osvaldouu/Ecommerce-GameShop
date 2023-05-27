// import {loadBDD} from "./firebase"


export const consultarBDD = async (ruta) => {
  const promise = await fetch(ruta)
  const products = await promise.json()
  return products
}

// loadBDD();