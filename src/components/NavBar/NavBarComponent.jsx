import React from 'react'
//import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidgetComponent'
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";




export default function NavBarComponent({ cantArticulos }) {

  const imgEstilo = {
    width: '50px',
    height: '50px',

    marginLeft: '10px'
  }
  const linkStyle = {
    margin: "0.5rem",
    textDecoration: "none",
    color: 'white',
    fontSize: '13px',
  };
const faEstilo={
  margin: "0.5rem",
  textDecoration: "none",
  color: 'white',
  fontSize: '13px',

}

  const pEstilo={
    
    fontSize:'10px'
  }
  

  //const [cont, setCont] = useState(0);

  /*const devolverCantidad = () => {
    setCont(cont+valor);
    
  };*/



  return (
    <>
      <div className="col-xs-10">
        <header className="fixed-top ">
        <nav className="navbar navbar-expand-lg bg-light shadow-lg " data-bs-theme="dark">
     
       
       
          </nav>

          <nav className="navbar navbar-expand-lg bg-dark shadow-lg" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img style={imgEstilo} src='../../src/assets/logo.png' /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item active">

                    <a className="nav-link active" href="#"> <Link style={linkStyle} to={'/'}>Home</Link></a>
                  </li>

                  <li className="nav-item active">
                    <a className="nav-link scrollto" href="#"> <Link style={linkStyle} to={'/products/MLU1051'}>Celulares y telefonía</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"> <Link style={linkStyle} to={'/products/MLU1648'}>Informática</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scrollto" href="#"> <Link style={linkStyle} to={'/products/MLU1144'}>Consolas y video juegos</Link></a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link scrollto" href="#"> <Link style={linkStyle} to={'/products/MLU1000'}>Electrónica y audio</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scrollto" href="#"> <Link style={linkStyle} to={'/contact'}>Contacto</Link></a>
                  </li>

                </ul>

           
              
                <a  href='#' style={faEstilo}> <FaUser  /> &nbsp; &nbsp;</a>
              <div> <CartWidget /></div> 
                <strong> <p style={pEstilo} className='text-white '> {cantArticulos}</p></strong>
              </div>
             
            </div>

          </nav>
        </header>
      </div>





    </>

  )
}
