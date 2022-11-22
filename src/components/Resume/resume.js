import React from 'react'
import { Container, Row } from "react-bootstrap"
// import { Page, Document } from 'react-pdf'
import Header from "../header"
import Footer from "../footer"

const Resume = () => {
  return (
    <>
      <Header />
      <Container id="resume" className='text-white' fluid>
        <h1 className="fw-bold text-center">Resume</h1>
        <Container fluid className="d-grid" >
          <Row className="justify-content-center m-4">
            {/* <Document className="content-center" file="https://drive.google.com/file/d/1bTklatInXU9mbWxZtdOWFVSzE2leoOP6/view?usp=share_link">
              <Page pageNumber={1} /> */}
            {/* </Document> */}
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  )
}
export default Resume