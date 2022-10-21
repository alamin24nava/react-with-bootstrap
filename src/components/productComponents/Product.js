import React from 'react'
export default function Product(props) {
  const {title, des, price} = props.product;
  return (
      <div className='col-md-3'>
          <div className="card">
              <img src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/07/FXnpZQlakAEjcwa-photoutils.com_.jpeg?w=1800&ssl=1%201800w,%20https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/07/FXnpZQlakAEjcwa-photoutils.com_.jpeg?resize=300%2C200&ssl=1%20300w,%20https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/07/FXnpZQlakAEjcwa-photoutils.com_.jpeg?resize=1024%2C683&ssl=1%201024w,%20https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/07/FXnpZQlakAEjcwa-photoutils.com_.jpeg?resize=768%2C512&ssl=1%20768w,%20https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/07/FXnpZQlakAEjcwa-photoutils.com_.jpeg?resize=1536%2C1024&ssl=1%201536w,%20https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/07/FXnpZQlakAEjcwa-photoutils.com_.jpeg?resize=696%2C464&ssl=1%20696w,%20https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/07/FXnpZQlakAEjcwa-photoutils.com_.jpeg?resize=1068%2C712&ssl=1%201068w,%20https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/07/FXnpZQlakAEjcwa-photoutils.com_.jpeg?resize=630%2C420&ssl=1%20630w,%20https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/07/FXnpZQlakAEjcwa-photoutils.com_.jpeg?resize=150%2C100&ssl=1%20150w,%20https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/07/FXnpZQlakAEjcwa-photoutils.com_.jpeg?w=1392&ssl=1%201392w" className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{des}</p>
                  <p className="card-text">{price} Tk</p>
                  <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
          </div>
    </div>
  )
}
