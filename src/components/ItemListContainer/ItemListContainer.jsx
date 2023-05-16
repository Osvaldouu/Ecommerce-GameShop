import { useEffect, useState } from "react"
import { getproduct, getProductCategories } from "../../asyncMock"
import "../ItemListContainer/itemlistcontainer.css"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({titulo}) =>{
    const [products, setProducts] = useState([])

    const {categoryId } = useParams()

    useEffect (()=>{
        
        const asyncFunc = categoryId ? getProductCategories : getproduct
        
        asyncFunc(categoryId)
       .then(response=>{
        setProducts(response)
       })
       .catch (err => console.log(err))
    },[categoryId])
    return(
        <div className="container">
            <h1>{titulo}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer