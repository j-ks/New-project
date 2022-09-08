import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/Productlist';
import React,{useState} from 'react';
function App() {
  const productList = [
   { price: 99999,
    name: "Iphone 10S Max",
    quantity: 0,

  },
  { 
    price: 9999,
    name: "Iphone 10S Max",
    quantity: 0,

  }
  ]

  let [productList , setProductList] = useState(products)

const incrementQuantity = (index) => {
let newProductList = [...productList]
newProductList[index].quantity++
setProductList(newProductList);
  }

  return (
    <>
<Navbar/>
<main className='container mt-5'>
<ProductList productList={productList} incrementQuantity={incrementQuantity}/>
</main>
    </>
  );
}

export default App;
