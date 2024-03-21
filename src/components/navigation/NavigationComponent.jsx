import { Link } from "react-router-dom";

export default function NavigationComponent
  () {

    

  return (
    <>
      <div style={{ marginBottom: 30, display: 'flex', gap: 10 }}>
        <button><Link to={'/'}>Home</Link></button>
        <button><Link to={'/product'}>Products</Link></button>
        <button><Link to={'/contact'}>Contacts</Link></button>
      </div>
    </>
  );

}
