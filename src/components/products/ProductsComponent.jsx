import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Fade from 'react-bootstrap/Fade';
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";


export default function ProductsComponent({ agregar, cont }) {
  const [open, setOpen] = useState(true);
  const [contador, setContador] = useState(1);
  const { catId } = useParams();
  const [products, setProducts] = useState([]);
  
  console.log('id: ' + catId);
 



  //incrementamos el carrito
  const incrementar = () => {
    setContador(contador + 1);

    agregar(contador)
  };


  const cardEstilo = {
    width: '288px'

  }
  const imgEstilo = {
    width: '40%',
  
  }

  const btnEstilo = {
    backgroundColor: '#ac2bac'
  }


new Promise(() => {

    setTimeout(() => {

      setOpen(true)

    },1000);
  });


  useEffect(() => {
   
    fetch('https://api.mercadolibre.com/sites/MLU/search?category=' + catId)
      .then(response => response.json())
      .then(setOpen(false))
      
      .then(data => {
        console.log(data.results)
        
        setProducts(data.results);
        setContador(cont + 1);
       
      });
      
  }, catId);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <Fade in={open}>
        <div className="row row-cols-3 g-3">

          {products.map((producto) => (

            <div className="col">
              <div className="card shadow">
              <a href='#' className="btn btn-light btn-link" data-mdb-ripple-init data-mdb-ripple-color="dark"><Link to={'/product/' + producto.id + '/' + catId}><img style={imgEstilo} src={producto.thumbnail} className="card-img-top"
                  alt="imagen" /></Link></a>
               
                <div className="card-body">

                  <p className="card-text">
                    {producto.title}
                  </p>
                  <h5 className="card-title">{producto.currency_id} <strong>{producto.price}</strong></h5>

                  <button type="button" className="btn btn-dark" data-mdb-ripple-init onClick={() => incrementar()} >Agregar al carrito</button>
                  <a href='#' className="btn btn-light btn-link" data-mdb-ripple-init data-mdb-ripple-color="dark"><Link to={'/product/' + producto.id + '/' + catId}>Ver detalles</Link></a>


                </div>
              </div>

            </div>

          ))}

        </div>
      </Fade>
    </>
  );

}
