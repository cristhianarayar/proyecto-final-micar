import "./Bodyprivate.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Outlet } from "react-router-dom";

const Bodyprivate = (props) => {
  return (
    <div className="body-market2 flex-column">
      <h3>{props.title}</h3>
      <div className="body-card2 flex-row">
        <div className="margen2 flex-row">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../../src/assets/cardprueba.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
        <div className="margen2 flex-row">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../../src/assets/cardprueba.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
        <div className="margen2 flex-row">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../../src/assets/cardprueba.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
        <div className="margen2 flex-row">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../../src/assets/cardprueba.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default Bodyprivate;