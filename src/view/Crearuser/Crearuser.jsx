import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "./Crearuser.css";

function Crearuser(props) {
  return (
    <Form className="form">
      <h3>{props.title}</h3>
      <div className="validate">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>R.U.N</Form.Label>
          <Form.Control type="text" placeholder="Ingrese R.u.n" />
        </Form.Group>
        <div className="btn-validate">
          <Button variant="outline-dark">Validar</Button>
        </div>
      </div>
      <div className="form-data">
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Apellido" />
        </Form.Group>
      </div>
      <div className="form-date">
        <Form.Group className="ms-5 mb-3 me-4" controlId="formGroupPassword">
          <Form.Label>Edad</Form.Label>
          <Form.Control type="number" placeholder="99" />
        </Form.Group>
        <Form.Group className="mb-3 ms-5" controlId="formGroupPassword">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="number" placeholder="912345678" />
        </Form.Group>
      </div>
      <div className="form-dir">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </div>
      <div className="select">
        <Form.Select aria-label="Default select example"  className="me-3">
          <option>Región</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example"  className="me-3">
          <option>Ciudad</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Comuna</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className="form-dir">
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" placeholder="Dirección" />
        </Form.Group>
      </div>
      <div className="create">
        <Button variant="outline-dark" className="btn-crerec">
          Crear
        </Button>
        <Button variant="outline-dark" className="btn-crerec ms-5">
          Recuperar
        </Button>
      </div>
    </Form>
  );
}

export default Crearuser;
