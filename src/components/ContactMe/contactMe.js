import React from "react";
import { Container, Row} from "react-bootstrap";
import ContactMeCard from "./contactMeCard";

import Header from "../header"
import Footer from "../footer"
import aaronsInfo from "../../aaronsInfo"

function ContactMe() {
  return (
    <>
      <Header />
      <Container className="text-white" id="contactMe" >
      <h1 className="fw-bold text-center">Contact Me!</h1>
        <Container className="d-grid" style={{justify: "center"}} >
        <Row className="justify-content-center m-4">
          {aaronsInfo.links && aaronsInfo.links.map((item) => (<ContactMeCard item={item} key={item.platformName}/>))}
        </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default ContactMe;