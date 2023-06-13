import React, { useState } from "react";
import "../styles/info-detail.css";
import { Container, Row, Col, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import infoData from "../assets/data/info";
import Apply from "../components/Apply/Apply";

const InfoDetails = () => {
  const { id } = useParams();
  const info = infoData.find((info) => info.id === id);

  const [reviews] = useState(info.reviews);

  const { photo, title, desc, city, type } = info;

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
                      {" "}
                      <i className="ri-user-fill" style={{ color: "var(--secondary-color)" }}></i>({reviews.length})
                    </span>

                    <span>
                      <i className="ri-map-pin-fill" style={{ color: "var(--secondary-color)" }}></i>
                      {city}
                    </span>

                    <span>
                      <i className="ri-wheelchair-fill" style={{ color: "var(--secondary-color)" }}></i>
                      {type}
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p className="info__description">{desc}</p>
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Apply info={info} />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="8">
              <ListGroup>
                {reviews.map((review) => (
                  <ListGroup key={review.id}>{review.content}</ListGroup>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InfoDetails;
