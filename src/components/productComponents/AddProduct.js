import React, { useState } from 'react'

export default function AddProduct() {
    const [product, setProduct] = useState({productTitle:'', productDes:'',productPrice:'',productPhoto:''})
    const {productTitle, productDes, productPrice, productPhoto} = product

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(product);
        console.log('submited');
    }
    const handleChange = (e) => {
        let value = e.target.value;
        let feildName = e.target.name;
        setProduct({...product, [feildName]:value})
    }
    return (
    <div>
        <h4>Add Product</h4>
          <form action='' onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="productTitle" className="form-label">Product Title</label>
              <input onChange={handleChange} type="text" className="form-control" id="productTitle" name='productTitle'/>
            </div>

            <div className="mb-3">
            <label htmlFor="productDes" className="form-label">Product Description</label>
            <textarea onChange={handleChange} className="form-control" id="productDes" rows="3" name='productDes'></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">Product Price</label>
              <input onChange={handleChange} type="number" className="form-control" id="productPrice" name='productPrice'/>
            </div>

            <div className="mb-3">
                <label htmlFor="productPhoto" className="form-label">Product Photo</label>
                <input onChange={handleChange} className="form-control" type="file" id="productPhoto" name='productPhoto'/>
            </div>

            <button type="submit" className="btn btn-primary">Add Item</button>
          </form>

    </div>
  )
}
