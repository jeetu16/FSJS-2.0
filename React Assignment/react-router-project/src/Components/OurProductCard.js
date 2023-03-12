import React from 'react';
import './OurProductCard.css';

export default function OurProductCard(props) {
    const img = props.products_data.img;
    const title = props.products_data.title;
    const des = props.products_data.des;
    const classes = 'product-img ' + props.className;
    return (
        <div className='product'>
            <div className='img-con'>
                <img src={img} className = {classes} alt = "img" />
            </div>
            <p className='product-title'> {title} </p>
            <p className='product-des'> {des} </p>
        </div>
    )
}
