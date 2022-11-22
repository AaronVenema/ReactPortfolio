import React from "react"
import { Card} from "react-bootstrap"

function EducationCards({ item }) {

  return (
    <Card className="m-4 bg-dark" style={{ width: "40%" }}>
      <Card.Body className="bg-dark text-white text-center ">
        <Card.Title>{item.degree}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {item.schoolName}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default EducationCards;