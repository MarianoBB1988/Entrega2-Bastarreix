
export default function FooterComponent() {
const footerEstilo={
    backgroundColor: 'black',
   
}
    return (
        <>
       
        <br></br><br></br>
        <footer class="bg-body-tertiary text-center text-lg-start" style={footerEstilo}>
     
                <div className="text-center p-3" >
                <strong>    Creado por </strong>Mariano Bastarreix | Curso React - 
                    <a className="text-body" href="https://www.coderhouse.com/"> Coderhouse.com</a>
                </div>
              
            </footer>
        </>
    );

}
