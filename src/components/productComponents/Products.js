import React from 'react'
import ProductModel from './model/ProductModel'
import Product from './Product'

const productList = [
    ProductModel('Iphon 12 max', 'Lorem ipsum', 75000),
    ProductModel('Iphon 12', 'Lorem ipsum', 75000),
    ProductModel('Iphon 7', 'Lorem ipsum', 75000),
    ProductModel('Iphon 5 max', 'Lorem ipsum', 75000),
]

export default function Products() {
  return (
    <div className='row'>
        {
            productList.map((product, index) => (
                <Product key={index} product={product} />
            ))
        }
    </div>
  )
}
