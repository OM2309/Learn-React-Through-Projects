import { useState } from "react";
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
import DisplayCount from "./DisplayCount";

const AddTodo = () => {
  const [todo, settodo] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(todo);
  }
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3>Add Todo Here</h3>
              <DisplayCount/>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Here"
                    value={todo.title}
                    onChange={(event)=>settodo({...todo,title: event.target.value})}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Todo Description</Form.Label>
                  <Form.Control
                    as={"textarea"}
                    type="text"
                    placeholder="Enter Here"
                    value={todo.description}
                    onChange={(event)=>settodo({...todo,description: event.target.value})}
                  ></Form.Control>
                </Form.Group>

                <Container className="text-left my-3">
                  <Button type="submit" variant="primary">Add Todo</Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTodo;
