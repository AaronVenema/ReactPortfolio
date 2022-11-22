import React from "react"
import { Card } from "react-bootstrap"

function FrameworkCards({ item }) {
  return (
    <Card className="m-4 bg-dark" style={{  width: "35%" }}>
      {item.skillIcon} 
      <Card.Body className="bg-dark text-white ">
        <Card.Title className="text-center" style={{ textAlign: "justify" }}>{item.skill}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default FrameworkCards;