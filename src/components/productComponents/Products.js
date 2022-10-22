import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Product from './Product';
import ProductModel from '../../Model/ProductModel';


const productList = [
  ProductModel(uuidv4(), 'La Casa De Papel STyle Hacker mukhosh', 'La Casa De Papel STyle Hacker mukhosh', 100, 'https://static-01.daraz.com.bd/p/aadc46bc4a2a6348b6bcd8881bb202c0.jpg_200x200q80-product.jpg_.webp'),
  ProductModel(uuidv4(), 'USB Type C To 3./5mm Jack Audio Adapter', 'USB Type C To 3.5mm Jack Audio Adapter', 5500, 'https://static-01.daraz.com.bd/p/e9969ee2fc79dec9f495b4524613ba87.jpg_200x200q80-product.jpg_.webp'),
  ProductModel(uuidv4(), 'Airbuds Pro Game Console Premium Silicon Cover Case', 'Airbuds Pro Game Console Premium Silicon Cover Case', 8000, 'https://static-01.daraz.com.bd/p/613395e2508e179dafd41519046351a8.jpg_200x200q80-product.jpg_.webp'),
  ProductModel(uuidv4(), 'Bike Motorcycle Cycling LED 4 Color Bike Wheel Tire Light Tire Valve Dust Cap Valve Core Spoke Light', 'Bike Motorcycle Cycling LED 4 Color Bike Wheel Tire Light Tire Valve Dust Cap Valve Core Spoke Light', 8700,'' ),
]

export default function Products(props) {
  // const {productTitle, productDes, productPrice, productPhoto} = props.AddProduct
  const newProduct = props.AddProduct
  console.log(newProduct);

  return (
    <div className='row'>
      {
        productList.length >= 0 ? (<h4>All Product ({productList.length})</h4>) :''
      }
      
      {
        productList.map((singleProduct) => (
          <Product key={uuidv4()} product={singleProduct}/>
        ))
      }
      
    </div>
  )
}
