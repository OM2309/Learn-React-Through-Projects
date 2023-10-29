import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MyCard = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{ aspectRatio: 9 / 16 }}
          src={
            props.imgUrl
              ? props.imgUrl
              : "https://plus.unsplash.com/premium_photo-1676654936110-7d454f505dba?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
