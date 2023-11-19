import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";

const BootstrapComponent = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Kartica 1</Card.Title>
          <Card.Text>Ovo je primjer kartice.</Card.Text>
          <Button variant="primary">Detalji</Button>
        </Card.Body>
      </Card>

      <ListGroup>
        <ListGroup.Item variant="primary">Element 1</ListGroup.Item>
        <ListGroup.Item variant="success">Element 2</ListGroup.Item>
      </ListGroup>

      <div>
        <Button variant="success" style={{ marginRight: "5px" }}>
          Gumb1
        </Button>
        <Button variant="danger" style={{ marginRight: "5px" }}>
          Gumb2
        </Button>
        <Button variant="warning" style={{ marginRight: "5px" }}>
          Gumb3
        </Button>
        <Button
          variant="outline-info"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Gumb4
        </Button>
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default BootstrapComponent;
