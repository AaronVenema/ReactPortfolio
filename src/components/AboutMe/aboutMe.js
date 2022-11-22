import React from "react";
import { Container, Row} from "react-bootstrap";
import AboutMeCard from "./aboutMeCard";
import Header from "../header"
import Footer from "../footer"

function AboutMe() {
  return (
    <>
      <Header />
      <Container className="text-white" id="aboutMe" >
        <Container className="d-grid" >
        <Row className="justify-content-center m-4">
          <AboutMeCard />
        </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default AboutMe;