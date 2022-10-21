import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddProduct from './components/productComponents/AddProduct';
import Products from './components/productComponents/Products';
function App() {
  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-md-3'>
        <AddProduct />
        </div>
        <div className='col-md-9'>
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
