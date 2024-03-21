import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComponent from './components/home/HomeComponent'
import SingleProduct from './components/product/SingleProduct'
import ContactComponent from './components/contact/ContactComponent'

import NavBarComponent from './components/NavBar/NavBarComponent';
import ProductsComponent from './components/products/ProductsComponent';

import FooterComponent from './components/footer/FooterComponent'

function App() {
  const [cont, setCont] = useState(0);
  const [productos, setProductos] = useState([]);
  

  //agregar al carrito
  const agregar = (num) => {

    setCont(num);//contador para el cartWidget


  }


  return (
    <>
    
      <BrowserRouter>
        <NavBarComponent cantArticulos={cont} />
      
        <Routes>
          
          <Route exact path='/' element={<HomeComponent />} />
          <Route exact path='/products/:catId' element={<ProductsComponent agregar={agregar} cont={cont} />} />
          <Route exact path='/product/:prodId/:catId' element={<SingleProduct agregar={agregar} cont={cont} />} />
          <Route exact path='/contact' element={<ContactComponent />} />
       
        </Routes>
        <FooterComponent />
      </BrowserRouter>

    </>
  )
}

export default App