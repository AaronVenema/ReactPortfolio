import React from "react"
import Card from "react-bootstrap/Card"
import aaronsInfo from "../../aaronsInfo"

function AboutMeCard() {
  return (
    <Card className="m-4 bg-dark" style={{ justify: "center", width: "90%" }}>
      <Card.Body className="bg-dark text-white text-center">
        <Card.Title>About Me!</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          Nice to meet you, my name is {aaronsInfo.name}. I recently changed careers to {aaronsInfo.title}. I am a {aaronsInfo.summary}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default AboutMeCard;