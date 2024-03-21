import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBarComponent from '../NavBar/NavBarComponent';

export default function ProductsComponent({ agregar, cont }) {

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
    width: '40%'
  }

  const btnEstilo = {
    backgroundColor: '#ac2bac'
  }




  useEffect(() => {

    fetch('https://api.mercadolibre.com/sites/MLU/search?category=' + catId)
      .then(response => response.json())
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



      <div className="row row-cols-3 g-3">

        {products.map((producto) => (
          <div className="col">
            <div className="card shadow">
              <img style={imgEstilo} src={producto.thumbnail} className="card-img-top"
                alt="Hollywood Sign on The Hill" />
              <div className="card-body">

                <p className="card-text">
                  {producto.title}
                </p>
                <h5 className="card-title">{producto.currency_id} <strong>{producto.price}</strong></h5>
               
                <button type="button" className="btn btn-dark" data-mdb-ripple-init onClick={()=>incrementar()} >Agregar al carrito</button>
                <a href='#' className="btn btn-light btn-link" data-mdb-ripple-init data-mdb-ripple-color="dark"><Link to={'/product/' + producto.id + '/' + catId}>Ver detalles</Link></a>
            

              </div>
            </div>
          </div>
        ))}
      </div>



    </>
  );

}
