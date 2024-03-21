import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function SingleProduct({agregar, cont}) {

    const [contador, setContador] = useState(cont);
    const { prodId } = useParams();
    const { catId } = useParams();
    const [products, setProducts] = useState([]);

    const [product, setProduct] = useState([]);
    console.log('id: ' + prodId + catId);

    const incrementar = () => {
        setContador(cont + 1);
    
        agregar(contador)
      };
    

    const imgEstilo = {
        width: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const linkStyle = {

        textDecoration: "none",

        fontSize: '12px',
    };




    useEffect(() => {

        fetch('https://api.mercadolibre.com/sites/MLU/search?category=' + catId)

            .then(response => response.json())
            .then(data => {
                console.log(data.results)


                setProducts(data.results);
                setContador(cont + 1);

            });


    }, prodId);

    const suplantar = ((unaCadena) => {
        if (unaCadena = 'new') {
            return 'nuevo';
        } else {
            return 'usado';
        }
    })

    const ruta = ((categoria) => {
        switch (categoria) {
            case 'MLU1051':
                return 'Celulares y telefonía';
                break;
            case 'MLU1648':
                return 'Informática';
                break;
            case 'MLU1144':
                return 'Consolas y video juegos';
                break;
            case 'MLU1000':
                return 'Electrónica y audio';
                break;
        }

    })




    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            

            <div className="row " >
                <div className="col-8 "> <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0" href="#"> <Link style={linkStyle} to={'/products/' + catId}>Volver &nbsp; | &nbsp;  </Link> </a>
                    <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0" href="#" style={linkStyle}> <Link style={linkStyle} to={'/'}>Home</Link> /</a>
                    <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0" href="#"> <Link style={linkStyle} to={'/products/' + catId}>{ruta(catId)}</Link></a><br></br>
                </div>

            </div>

            {products.filter(producto => producto.id == prodId).map((producto) => (

                <div className="card shadow" >

                    <p className="card-header">Detalles del producto</p>
                    <div className="row" >
                    <div className="card-body col-1">
                            </div>
                        <div className="card-body col-4"  >
                            <img class="img-fluid" alt="Responsive image" style={imgEstilo} src={'http://http2.mlstatic.com/D_' + producto.thumbnail_id + '-O.webb'} />
                        </div>
                        <div className="card-body col-4">

                            <p className="card-text">{producto.title}</p>
                            <h4 className="card-title">{producto.currency_id} <strong>{producto.price}</strong></h4>
                            <h6>Valoración: </h6>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStarHalfAlt /></i>
                            <i><FaRegStar /></i>
                            <br></br>
                            <br></br>
                            <h6 className="card-title">Disponibles: <strong>{producto.available_quantity}</strong></h6>
                            <h6 className="card-title">Condición: <strong>{suplantar(producto.condition)}</strong></h6><br></br>

                            <div className="d-grid gap-2">
                                <button className="btn btn-secondary" type="button" data-mdb-ripple-init onClick={incrementar}>Agregar al carrito</button>
                                <button className="btn btn-dark" type="button" data-mdb-ripple-init>Comporar ahora</button>
                            </div>
                        </div>

                        <div className="card-body col-1">
                            </div>

                    </div>
                </div>


            ))}

        </>
    );

}

