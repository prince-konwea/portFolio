import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Prince Konwea </span>
              from <span className="purple">Abuja, Nigeria</span>
            <br />I am a software developer and CTO of beanscript.ng.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing piano || Games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " it's all a matter of practice!"{" "}
          </p>
          <footer className="blockquote-footer">Konwea</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
