import React from "react";
import EventCard from "../../shared/Eventcard";
import eventData from "../../assets/data/event";
import { Col } from "reactstrap";

const EventListNew = () => {
  return (
    <>
      {eventData?.map((event) => (
        <Col lg="3" className="mb-4" key={event.id}>
          <EventCard event={event} />
        </Col>
      ))}
    </>
  );
};

export default EventListNew;
