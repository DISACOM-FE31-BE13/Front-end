import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img1.png";
import heroImg02 from "../assets/images/hero-img2.jpeg";
import heroVideo from "../assets/images/hero-video.mp4";

import ServiceList from "../services/ServiceList";
import EventList from "../components/Event/EventListNew";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <h1>
                  There is <span className="highlight">Ability</span> in Every <span className="highlight">Disability</span>
                </h1>
                <p>Building communities both disabyteric and non-disabled that are safe and mutually supportive and provide training to develop their potential. Build and connect connections between each other.</p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>

        <section>
          <Container>
            <Row>
              <Col lg="3">
                <h5 className="services__subtitle">What we serve</h5>
                <h2 className="services__title">We offer our best services</h2>
              </Col>
              <ServiceList />
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5">
                <h2 className="event__title-1">Our Events</h2>
              </Col>
              <EventList />
            </Row>
          </Container>
        </section>
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
