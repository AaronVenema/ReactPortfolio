import React from "react"
import { Card } from "react-bootstrap"
function ContactMeCard({ item }) {
  return (
    <a className="col-md bg-dark text-light"href={item.url} target="_blank"> 
    <Card className="m-4 bg-dark" style={{ width: "100%" }}>
      {item.icon}
      <Card.Body className="bg-dark text-white text-center ">
      <Card.Text  />
      </Card.Body>
    </Card>
    </a>
  );
}
export default ContactMeCard;