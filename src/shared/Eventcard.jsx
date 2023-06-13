import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "./event-card.css";

const EventCard = ({ event, detailLink }) => {
  const { title, city, photo, price } = event;

  return (
    <div className="event__card">
      <Card>
        <div className="event__img">
          <img src={photo} alt="event-img" />
          <span>Event</span>
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="event__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
          </div>

          <h5 className="event__title">{title}</h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>{price}</h5>

            <button className="btn booking__btn">{detailLink ? <Link to={`/eventdetail/${event.id}`}>Apply Now</Link> : <Link to="/login">Apply Now</Link>}</button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventCard;
