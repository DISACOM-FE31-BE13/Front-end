import React from "react";
import "./newsletter.css";

import { Container, Row, Col } from "reactstrap";
import disability from "../assets/images/disability.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get more information.</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>

              <p>Together build a community that motivates each other and develops their potential. Are you interested in joining Disacom?</p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={disability} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
