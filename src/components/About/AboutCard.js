import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chukwudimma Ani </span>
            from <span className="purple">  Lagos, Nigeria.</span>
            <br />
            
            <br />
            I have completed BSc in Marketing at ESUT Nigeria.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
            <br />
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />canopywalks
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p><br />Fun Fact About Me:<br />
            <br />
            I speak 2 languages Fluently and ich spreche ein bissen Deutsch aber ich lerne auch Deutsch
            <br /></p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Mgbe Onye ji teeta Ula !"{" "}
          </p>
          <footer className="blockquote-footer">Chukwudimma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
