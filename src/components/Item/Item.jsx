import React from 'react'
import "../Item/item.css"
import { Link } from 'react-router-dom'

export const Item = ({id,logo, name, price, img,category}) => {

  return (
    <article className='container'>
        <div key={id} className="card-container">
            <picture className='card-img'>
                <img src={img} alt={name} />
            </picture>
            <div className='card-name'>
                <h2>{name}</h2>
            </div>
            <div className='card-data'>
                <p className='price-item'>{price}</p>
                <p className='categoria-item'>Categoria: {category} {logo}</p>
            </div>
            <div className='detail-button'>
                <Link to={`/item/${id}`} className='btn41-43 btn-42'>ver detalles</Link>
            </div>
        </div>
    </article>
  )
}
