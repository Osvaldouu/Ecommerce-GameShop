import React from 'react'
import "../Item/item.css"
import { Link } from 'react-router-dom'

export const Item = ({id,stock, name, price, img, category}) => {
  return (
    <article>
        <div className="card-container">
            <picture className='card-img'>
                <img src={img} alt={name} />
            </picture>
            <div className='card-name'>
                <h2>{name}</h2>
            </div>
                <p>stock disponible: {stock}</p>
            <div className='card-data'>
                <p>precio: {price}</p>
                <p>Categoria: {category}</p>
            </div>
            <footer>
                <Link to={`/Item/${id}`} className='Option'>ver detalles</Link>
            </footer>
        </div>
    </article>
  )
}
