import React from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/information.css";
import infoData from "../assets/data/info";
import InfoCard from "./../shared/InfoCard";
import Newsletter from "../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <>
      <CommonSection title={"All Information"} />

      <section className="read-more">
        <Container>
          <Row>
            <Col lg="12" className=" mb-0">
              <h2 className="info__title-1 text-left">
                <Link to="/login">Read More</Link>
              </h2>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {infoData?.map((info) => (
              <Col lg="3" className="mb-4 " key={info.id}>
                <InfoCard info={info}></InfoCard>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Information;
