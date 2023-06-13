import React, { useState, useEffect } from "react";
import "../styles/information.css";
import infoData from "../assets/data/info";
import InfoCard from "./../shared/InfoCard";
import { Container, Row, Col } from "reactstrap";

const InfoLogin = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);
  return (
    <>
      <section>
        <Container>
          <Row>
            {infoData?.slice(page * 8, (page + 1) * 8).map((info) => (
              <Col lg="3" className="mb-4" key={info.id}>
                <InfoCard info={info} detailLink={true} />
              </Col>
            ))}
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span key={number} onClick={() => setPage(number)} className={page === number ? "active__page" : ""}>
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InfoLogin;
