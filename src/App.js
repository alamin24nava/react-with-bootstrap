import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import AddProduct from './components/productComponents/AddProduct';
import Products from './components/productComponents/Products';
function App() {

  const [data, setData] = useState('')
  const onData = (data) =>{
    setData (data)
  }
  return (
    <div className='container-fluid mt-5'>

      <div className='row'>
        <div className='col-md-3'>  
        <AddProduct onData = {onData} />
        </div>
        <div className='col-md-9'>
          <Products AddProduct = {data} />
        </div>
      </div>
    </div>
  );
}

export default App;
