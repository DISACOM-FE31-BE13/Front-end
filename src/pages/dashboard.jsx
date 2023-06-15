import React from "react";
import "../styles/dashboard.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/imgdashboard.jpg";
import ServiceList from "../services/ServiceList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImageGallery";

const Dashboard = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__img-box-dashboard">
                <img src={heroImg} alt="" />
                <h1 className="hero__img-text">Welcome to DISACOM</h1>
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
              <Col lg="12">
                <h2 className="gallery__title">Gallery</h2>
              </Col>
              <Col lg="12">
                <MasonryImagesGallery />
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
