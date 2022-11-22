import React from "react";
import { Container, Row } from "react-bootstrap";
import EducationCard from "./educationCards";
// import Particle from "../particles"
import Header from "../header"
import Footer from "../footer"
import aaronsInfo from "../../aaronsInfo"

function Education() {
  return (
    <>
      <Header />
      <Container className="text-white" id="education" >
      <h1 className="fw-bold text-center">Education</h1>
        <Container className="d-grid" >
        <Row className="justify-content-center m-4">
          {aaronsInfo.education && aaronsInfo.education.map((item) => (<EducationCard item={item} key={item.degree} />))}
        </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default Education;
