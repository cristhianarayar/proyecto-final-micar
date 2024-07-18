import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./User.css"

function User(props) {
  return (
    <Form className="form-perfil">
      <div className="title">
        <div className="subtitle">
          <h3>{props.title}</h3>
        </div>
        <div className="img-title">
          <img src="../../src/assets/user.png" className="img-perfil" />
        </div>
      </div>
      <div className="form-user">
        <div className="form-datos">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>R.U.N</Form.Label>
            <Form.Control type="text" placeholder="Ingrese R.u.n" />
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
        <div className=" form-number">
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Edad</Form.Label>
            <Form.Control type="number" placeholder="99" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="number" placeholder="912345678" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </div>
      </div>
      <div className="form-selec mt-3">
        <Form.Select aria-label="Default select example" className="me-3">
          <option>Región</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" className="me-3">
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
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="text" placeholder="Dirección" />
      </Form.Group>
      <div className="act">
      <Button variant="outline-dark" className="btn-udt">
        Actualizar
      </Button>
      </div>
      <div className="pass mb-3">
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="outline-dark" className="btn-pass">
          Cambiar
        </Button>
      </div>
    </Form>
  )
}

export default User
