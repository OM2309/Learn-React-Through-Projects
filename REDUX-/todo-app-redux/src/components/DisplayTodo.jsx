import { useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import DisplayCount from "./DisplayCount";

const DisplayTodo = () => {
  const [todos, settodos] = useState([
    {
      title: "Todo",
      description: "Toddo",
    },
    {
      title: "Todo",
      description: "Toddo",
    },
  ]);

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <h3>All Todos are here</h3>
              <DisplayCount/>
              {todos.map((todo, index) => (
                <ListGroup key={index}>
                  <ListGroup.Item className="mb-3">
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                  </ListGroup.Item>
                </ListGroup>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayTodo;
