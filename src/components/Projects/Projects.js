import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portImg from "../../Assets/Projects/desktop___web_nysc-removebg-preview.png"
import emotion from "../../Assets/Projects/portfolio.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portImg}
              isBlog={false}
              title="NYSC webpage_lookalike"
              description=" ####."
              ghLink="#"
               demoLink="#"      //<--------Please include a demo link here 
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="MyPOrtfolio"
              description=" ####."
              ghLink="#"
               demoLink="#"      //<--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
