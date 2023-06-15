import React from "react";
import { Card, CardBody } from "reactstrap";

import "./motivation-card.css";

const MotivationCard = ({ motivation }) => {
  const { title, video, photo } = motivation;

  return (
    <div className="info__card">
      <Card>
        <div className="info__img">
          <img src={photo} alt="info-img" />
          <span>Motivation</span>
        </div>

        <CardBody>
          <h5 className="info__title">
            <a href={video} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h5>
        </CardBody>
      </Card>
    </div>
  );
};

export default MotivationCard;
