import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiFiverr } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Hardcore Dev</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} HD</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.fiverr.com/hardcoredev"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFiverr />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
