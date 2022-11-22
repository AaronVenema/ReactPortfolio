import React from "react";
import { Container, Row } from "react-bootstrap";
import WorkHistoryCards from "./workHistoryCards";
// import Particle from "../particles"
import Header from "../header"
import Footer from "../footer"
import aaronsInfo from "../../aaronsInfo"

function WorkHistory() {
  return (
    <>
      <Header />
      <Container id="workHistory" >
      <h1 className="fw-bold text-white text-center">Work History</h1>
        <Container className="d-grid" style={{ justify: "center" }} >
        <Row className="justify-content-center m-4">
          {aaronsInfo.workHistory && aaronsInfo.workHistory.map((item) => (<WorkHistoryCards item={item} key={item.employer} />))}
        </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default WorkHistory;