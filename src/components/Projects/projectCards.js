import React from "react"
import { Card, Button } from "react-bootstrap"

function ProjectCards({ item }) {

  return (
    <Card className="m-4 bg-dark" style={{  width: "60%" }}>
      <Card.Img variant="top" src={require(`../../../public/images/${item.projectImg}`)} alt="card-img" />
      <Card.Body className=" text-white text-center">
        <Card.Title className="text-center m-4">{item.project}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {item.description}
        </Card.Text>
        <Button className="rounded-pill" variant="secondary" href={item.projectUrl} target="_blank">Let's see it!</Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;