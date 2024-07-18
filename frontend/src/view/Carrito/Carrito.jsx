import './Carrito.css'
import Table from "react-bootstrap/Table"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import { NavLink} from "react-router-dom";

const Carrito = (props) =>{
    return(
        <div className="div-ventas">
      <h3>{props.title}</h3>
      <Table striped>
        <thead>
          <tr>
            <th className="aline">Producto</th>
            <th className="aline">Descripción</th>
            <th className="aline">Cantidad</th>
            <th className="aline">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image
                src="../../src/assets/cardprueba.jpg"
                rounded
                className="img-card"
              />
            </td>
            <td className="aline">Detalle de producto</td>
            <td className="aline"><Button className="img-agr1 me-2"/>2<Button className="img-agr2 ms-2 mb-2"/></td>
            <td className="aline negro">$10.000</td>
          </tr>
          <tr>
            <td>
              <Image
                src="../../src/assets/cardprueba.jpg"
                rounded
                className="img-card"
              />
            </td>
            <td className="aline">Detalle de producto</td>
            <td className="aline"><Button className="img-agr1 me-2"/>2<Button className="img-agr2 ms-2 mb-2"/></td>
            <td className="aline negro">$9.890</td>
          </tr>
          <tr>
            <td colSpan={3} className="negro">
              Total
            </td>
            <td className="negro">$ 19.890</td>
          </tr>
        </tbody>
      </Table>
      <div className="div-btn">
      <NavLink className="txt-menu me-5"  to="/home-private/venta" >
      <Button variant="outline-dark" className="btn-pagar mb-3 mt-3">
        Ir a Pagar
      </Button>
      </NavLink>
      </div>
    </div>
    )
}

export default Carrito