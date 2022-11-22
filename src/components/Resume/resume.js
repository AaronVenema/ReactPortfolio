import React from 'react'
import { Container, Row } from "react-bootstrap"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Header from "../header"
import Footer from "../footer"


const Resume = () => {
  const docs = [ { uri: require("./resume.pdf") } ];

  return (
    <>
      <Header />
      <Container id="resume" className='text-white' fluid>
        <h1 className="fw-bold text-center">Resume</h1>
        <Container fluid  style={{  justify: "center", width: "80%" }} >
          <Row className="justify-content-center m-4">
            <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  )
}
export default Resume