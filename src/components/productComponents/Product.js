import React from 'react'
import { AiFillDelete } from "react-icons/ai";
export default function Product(props) {
  const {id, title, des, regPrice, productImg} = props.product
  let dicPrice =(regPrice / 100) * 60
  return (
      <div className='col-md-3'>
          <div className="card">
            {productImg === '' ? (<img src='https://eyeclinicofedmonds.com/wp-content/uploads/2017/10/placeholder-image.png' className="card-img-top img-fluid " alt='Dummy' />):( <img src={productImg} className="card-img-top img-fluid" alt={title} />)}
             
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{des}</p>
                  <p className="card-text text-info fw-bold">Tk {dicPrice}</p>
                  <p className="card-text"> <span className='text-decoration-line-through text-danger'>Tk {regPrice}</span> - <span className='text-secondary'>40%</span></p>
                  <div className='d-flex justyfi-content-s'>

                  </div>
                  <button className="btn btn-danger">Delete Product</button>
              </div>
          </div>
    </div>
  )
}
