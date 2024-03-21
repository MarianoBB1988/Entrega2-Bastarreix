export default function ContactComponent() {

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div classNameName="card shadow" >

        <h5 classNameName="card-header">Formulario de contacto</h5>
        <div classNameName="row" >
          <form>
          
            <div className="row mb-4">
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <input type="text" id="form6Example1" className="form-control" />
                  <label className="form-label" for="form6Example1">Nombre</label>
                </div>
              </div>
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <input type="text" id="form6Example2" className="form-control" />
                  <label className="form-label" for="form6Example2">Apellido</label>
                </div>
              </div>
            </div>

         
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" id="form6Example3" className="form-control" />
              <label className="form-label" for="form6Example3">Télefono</label>
            </div>


          
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form6Example5" className="form-control" />
              <label className="form-label" for="form6Example5">Email</label>
            </div>

           
                  
            <div data-mdb-input-init className="form-outline mb-4">
              <textarea className="form-control" id="form6Example7" rows="4"></textarea>
              <label className="form-label" for="form6Example7">Mensaje</label>
            </div>

         

           
            <button data-mdb-ripple-init type="button" className="btn btn-dark btn-block mb-4">Enviar</button>
          </form>
        </div>

      </div>
  
    </>
  );

}
