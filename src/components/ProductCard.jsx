import React from 'react'
import '../App.css'
const ProductCard = ({ title, price, image, category }) => {
    return (
        <div className='card'>
            <div className="inner">
                <img src={image} alt="" />
                <h3 className='title'>{title}</h3>
                <p className='category'>{category}</p>
                <h3 className='price'>${price}</h3>
            </div>
        </div>
    )
}

export default ProductCard