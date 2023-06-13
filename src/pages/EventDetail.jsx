import React, { useState, useRef } from "react";
import "../styles/info-detail.css";
import { Container, Row, Col, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import eventData from "../assets/data/event";
import Join from "../components/Apply/Join";

const EventDetails = () => {
  const { id } = useParams();
  const event = eventData.find((event) => event.id === id);

  const { photo, title, desc, price, city } = event;

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="info__content">
                <img src={photo} alt=""></img>
                <div className="info__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span>
                      <i className="ri-map-pin-fill" style={{ color: "var(--secondary-color)" }}></i>
                      {city}
                    </span>

                    <span>
                      <i className="ri-price-tag-3-fill" style={{ color: "var(--secondary-color)" }}></i>
                      {price}
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p className="info__description">{desc}</p>
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Join event={event} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default EventDetails;
