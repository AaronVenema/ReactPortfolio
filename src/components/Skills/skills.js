import React from "react";
import { Container, Row } from "react-bootstrap";
import LanguageCards from "./languageCards";
import DataBaseCards from "./databaseCards";
import HostingCards from "./hostingsCards";
import FrameworkCards from "./frameworks";
import VersionControlCards from "./versionControlCards";
import Header from "../header"
import Footer from "../footer"
import aaronsInfo from "../../aaronsInfo"

function Skills() {
  return (
    <>
      <Header />
      <Container id="skills" >
        <Container fluid className="d-grid text-white" style={{ justify: "center" }} >
          <h1 className="fw-bold text-center">Languages</h1>
          <Row className="justify-content-center m-4" style={{ content: "center" }}>
            {aaronsInfo.languages && aaronsInfo.languages.map((item) =>
            (<LanguageCards  item={item} key={item.skill} />))}
          </Row>
          <h1 className="fw-bold text-center">Frameworks</h1>
          <Row className="justify-content-center m-4">
            {aaronsInfo.frameworks && aaronsInfo.frameworks.map((item) => (<FrameworkCards item={item} key={item.skill}/>))}
          </Row>
          <h1 className="fw-bold text-center">Hostings</h1>
          <Row className="justify-content-center m-4">
            {aaronsInfo.hostings && aaronsInfo.hostings.map((item) => (<HostingCards item={item} key={item.skill}/>))}
          </Row>
          <h1 className="fw-bold text-center">Databases</h1>
          <Row className="justify-content-center m-4">
            {aaronsInfo.databases && aaronsInfo.databases.map((item) => (<DataBaseCards item={item} key={item.skill}/>))}
          </Row>
          <h1 className="fw-bold text-center">Verison Controls</h1>
          <Row className="justify-content-center m-4">
            {aaronsInfo.versionControl && aaronsInfo.versionControl.map((item) => (<VersionControlCards item={item} key={item.skill}/>))}
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default Skills;