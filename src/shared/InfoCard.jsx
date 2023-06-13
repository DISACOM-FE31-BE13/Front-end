import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "./info-card.css";

const InfoCard = ({ info, detailLink }) => {
  const { title, city, photo, reviews, type, id } = info;

  return (
    <div className="info__card">
      <Card>
        <div className="info__img">
          <img src={photo} alt="info-img" />
          <span>Job</span>
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="info__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="info__review d-flex align-items-center gap-1"></span>
            <span>({reviews.length})</span>
          </div>

          <span className="info__location d-flex align-items-center gap-1">
            <i className="ri-wheelchair-line"></i> {type}
          </span>

          <h5 className="event__title">{title}</h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <button className="btn booking__btn">{detailLink ? <Link to={`/infodetail/${id}`}>Apply Now</Link> : <Link to="/login">Apply Now</Link>}</button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default InfoCard;
