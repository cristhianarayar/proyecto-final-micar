import { NavLink} from "react-router-dom";
import './Menu.css'
import Button from "react-bootstrap/Button"

const Menu = () => {
  return (
    <div className="menu flex-row">
         <NavLink className="me-5"  to="/" >
          <Button variant="outline-danger" className="btn-home" ></Button>
        </NavLink>
        <NavLink className="txt-menu me-5 nav-item nav-link" to="/home-private/tienda">Tienda</NavLink>
        <NavLink className="txt-menu me-5 nav-item nav-link"  to="/home-private/agregar">Agregar Producto</NavLink>
        <NavLink className="txt-menu me-5 nav-item nav-link"  to="/home-private/actualizar">Actualizar Producto</NavLink>
        <NavLink className="txt-menu me-5 nav-item nav-link"  to="/home-private/venta" >Venta</NavLink>
        <NavLink className="txt-menu me-5 nav-item nav-link"  to="/home-private/tienda" >Salir</NavLink>
        <NavLink className="me-5"  to="/home-private/carrito" >
          <Button variant="outline-danger" className="btn-cart" ></Button>
        </NavLink>
        <NavLink className="me-5"  to="/home-private/mi-perfil" >
          <Button variant="outline-danger" className="btn-user" ></Button>
        </NavLink>
    </div>
  );
};

export default Menu;
