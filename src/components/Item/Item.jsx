import React from 'react'
import "../Item/item.css"
import { Link } from 'react-router-dom'

export const Item = ({ prod }) => {
const {id,logo, name, price, image, idCategory} = prod;



  return (
    <article className='container-item'>
        <div key={id} className="card-container">
            <picture className='card-img'>
                <img src={image} alt={name} />
            </picture>
            <div className='card-name'>
                <h2>{name}</h2>
            </div>
            <div className='card-data'>
                <p className='price-item'>{price}</p>
                <p className='categoria-item'>Categoria: {idCategory} {logo}</p>
            </div>
            <div className='detail-button'>
                <Link to={`/products/${id}`} className='btn41-43 btn-42'>ver detalles</Link>
            </div>
        </div>
    </article>
  )
}
