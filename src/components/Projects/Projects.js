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
              description=" its alookalike for the NYSC webpage for youth corpers, one of 
              the first project i did."
              ghLink="https://github.com/Chukwudimma-Ani/Remake-of-NYSC-homePage"
               demoLink="https://chukwudimma-ani.github.io/Remake-of-NYSC-homePage/" 
              //  Example of works
                   //<--------Please include a demo link here 
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="MyPOrtfolio"
              description="My personal portfolio  which features 
              some of my github projects as well as my resume and technical skills.
              This project was built using these technologies.
              React.js, Node.js, Express.js, CSS3,VsCode, Vercel"
              ghLink="https://github.com/Chukwudimma-Ani/Dimma"
               demoLink="https://chukwudimma.vercel.app/"      //<--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
