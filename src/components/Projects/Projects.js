import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import insta from "../../Assets/Projects/insta.png";
import blog from "../../Assets/Projects/blog.jpg";
import ethSend from "../../Assets/Projects/ethSend.png";
import socialcode from "../../Assets/Projects/socialcode.png";
import vidCon from "../../Assets/Projects/vidCon.png";
import emoDetct from "../../Assets/Projects/emoDetct.jpeg";

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
              imgPath={insta}
              isBlog={false}
              title="Social Media(Instaram clone)"
              description="An accurate instagram clone which is fully functional. This app has Home, Explore, Reels, Activity and profile screen. Built With react native and expo."
              link="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog"
              description="Fully functiona blog app that has all the feature that a ordinary blog app has including posting blog adding images comment liking a blog following the author custimizing the feeds. This app has a admin pannel where admin( I ) can see the analytics of every blog post."
              link="https://github.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ethSend}
              isBlog={false}
              title="Ether Send"
              description="Fully decentrilized ethereum send website to send ethereum form one account to another. The transaction is validated by the Solodity code. The best part is that this made on web 3.0"
              link="https://deployment-for-ethereum-project.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialcode}
              isBlog={false}
              title="Social Code"
              description="A social media which is fully secured by encryption and is decenterilized. It has every feature that a social media has. It just needs a better UI."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vidCon}
              isBlog={false}
              title="Video Confrencing"
              description="A video confrencing site which is fully free and has no limit of features. It has creating a meeting, Sharing the meeting link, Admin only settings, screen share, Messaging, privete Messinging etc."
              link="https://mediacall.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emoDetct}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/google/mediapipe"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
