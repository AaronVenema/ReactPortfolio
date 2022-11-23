import React from "react"
import { Card } from "react-bootstrap"
function ContactMeCard({ item }) {
  return (
    <a className="col-md bg-dark text-light border-0" href={item.url} > 
    <Card className="m-4 bg-dark" style={{ vw: "100%" }}>
      {item.icon}
      <Card.Body className="bg-dark text-white text-center ">
      <Card.Text  />
      </Card.Body>
    </Card>
    </a>
  );
}
export default ContactMeCard;