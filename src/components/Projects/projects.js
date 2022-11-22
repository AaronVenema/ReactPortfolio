import React from "react";
import { Container, Row} from "react-bootstrap";
import ProjectCard from "./projectCards";

import Header from "../header"
import Footer from "../footer"
import aaronsInfo from "../../aaronsInfo"

function Projects() {
  return (
    <>
      <Header />
      <Container className="text-white" fluid id="projects" >
      <h1 className="fw-bold text-center">Projects</h1>
        <Container fluid className="d-grid" >
          <Row className="justify-content-center m-4">
          {aaronsInfo.projects && aaronsInfo.projects.map((item) => (<ProjectCard item={item} key={item.id} />))}
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default Projects;