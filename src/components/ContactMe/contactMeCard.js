import React from "react"
import { Card } from "react-bootstrap"

function ContactMeCard({ item }) {
  return (
    <Card className="m-4 bg-dark" style={{ width: "40%" }}>
      <Card.Img variant="bottom" className={`${item.icon}`} alt="card-img" href={item.url} />
      <Card.Body className="bg-dark text-white text-center ">
        <Card.Title>{item.platformName}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default ContactMeCard;