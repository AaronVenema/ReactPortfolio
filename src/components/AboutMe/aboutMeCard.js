import React from "react"
import Card from "react-bootstrap/Card"
import aaronsInfo from "../../aaronsInfo"

function AboutMeCard() {
  return (
    <Card className="m-4 bg-dark border-0" style={{ justify: "center" }}>
      <Card.Body className="bg-dark text-white text-center">
        <Card.Title>About Me!</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          Nice to meet you, my name is {aaronsInfo.name}. I recently changed careers to {aaronsInfo.title}. I am a {aaronsInfo.summary}
        </Card.Text>
        <Card.Img style={{ width: "250px" }} variant="bottom" src={require(`./shibe.gif`)} alt="card-img" />
      </Card.Body>
    </Card>
  );
}
export default AboutMeCard;