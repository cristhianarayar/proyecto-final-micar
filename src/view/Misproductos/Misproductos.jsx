import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Misproductos.css";
import { NavLink} from "react-router-dom";

const Misproductos = (props) => {
  return (
    <Form className="producto flex-column">
      <h3>{props.title}</h3>
      <div className="td-buscar">
        <div className="lbl-buscar">
          <Form.Group className="mb-3 txt-inp" controlId="formGroupPassword">
            <Form.Label>Buscar Producto</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </div>
        <div className="btn-buscar">
         <Button variant="outline-dark" className="btn-add mt-3 mb-5">
            Buscar
          </Button>
        </div>
      </div>
      <div className="divcard">
        <div className="margen">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../src/assets/cardprueba.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <NavLink className="txt-menu me-5"  to="/home-private/actualizar/:producto" ><Button variant="primary">Actualizar</Button></NavLink>
            </Card.Body>
          </Card>
        </div>
        <div className="margen">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../src/assets/cardprueba.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Actualizar</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="margen">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../src/assets/cardprueba.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <NavLink className="txt-menu me-5"  to="/home-private/actualizar/:producto" ><Button variant="primary">Actualizar</Button></NavLink>
            </Card.Body>
          </Card>
        </div>
        <div className="margen">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../src/assets/cardprueba.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <NavLink className="txt-menu me-5"  to="/home-private/actualizar/:producto" ><Button variant="primary">Actualizar</Button></NavLink>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Form>
  );
};

export default Misproductos;
