import React from "react"
import { Card } from "react-bootstrap";

function WorkHistoryCards({ item }) {

  return (
    <Card className="m-4 bg-dark" style={{ vw: "40%" }}>
      <Card.Body className="bg-dark text-center text-white ">
        <Card.Title style={{ textAlign: "center" }}>{item.title}</Card.Title>
        <Card.Text>
          {item.employer}
          {item.employementDate}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WorkHistoryCards