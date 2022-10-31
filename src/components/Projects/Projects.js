import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify.png";
import netflix from "../../Assets/Projects/netflix.png";
import water from "../../Assets/Projects/water.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/koko.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatbox"
              description="A chatting application built with Nodejs, React and socketio still in progress...."
              ghLink="https://github.com/prince-konwea/chatBox-Api"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="koko-clothing"
              description=" My personal E-commerce web app for fashion products built with Reactjs, this project enhanced my knowledge on state management components like 
              Redux and context Api. I integrated Stripe as a payment gateway for the project."
              ghLink="https://github.com/prince-konwea/koko-clothing"
              demoLink="https://spontaneous-bienenstitch-a55113.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={water}
              isBlog={false}
              title="Weather App"
              description="Html5, Css and javascript--using FFc weather Api to showcase current weather details in real-time"
              ghLink="https://github.com/weather-api"
              demoLink="https://weatherapi09.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix-klone"
              description="A netflix clone built with nodejs, html,css and TmDb movie Api"
              ghLink="https://github.com/prince-konwea/netflix-klone"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="music-app"
              description="Building a music application with Reactjs and connecting to spotify api"
              ghLink="https://github.com/prince-konwea/MusicPlayer"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
