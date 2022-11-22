import React from "react"
import { Card } from "react-bootstrap";

function WorkHistoryCards({ item }) {

  return (
    <Card className="m-4 bg-dark" style={{ width: "40%" }}>
      <Card.Body className="bg-dark text-center text-white ">
        <Card.Title style={{ textAlign: "center" }}>{item.title}</Card.Title>
        <Card.Text>
          <div className="employer">{item.employer}</div>
          <div className="employementDate">{item.employementDate}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WorkHistoryCards