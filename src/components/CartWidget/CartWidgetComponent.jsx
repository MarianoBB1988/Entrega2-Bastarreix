import React from 'react'

import { FaShoppingCart } from "react-icons/fa";

export default function CartWidgetComponent() {

 

  const linkStyle = {

    textDecoration: "none",
    color: 'white'
  
};

  return (
    <>
      <a style={linkStyle} href='#'>
      <FaShoppingCart />
      </a>

    </>
  )
}


