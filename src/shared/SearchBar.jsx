import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SeachBar = () => {
  const positionRef = useRef("");
  const typeRef = useRef("");
  const locationRef = useRef("");

  const searchHandler = () => {
    const position = positionRef.current.value;
    const type = typeRef.current.value;
    const location = locationRef.current.value;

    if (position === "" || type === "" || location === "") {
      return alert("All fields are required!");
    }
  };
  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-item-center gap 4">
          <FormGroup className="d-flex gap-3 form__group from__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Position</h6>
              <input type="text" placeholder="What position are you looking for" ref={positionRef}></input>
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group from__group-fast">
            <span>
              <i class="ri-wheelchair-line"></i>
            </span>
            <div>
              <h6>Type</h6>
              <input type="text" placeholder="Types of disabilities" ref={typeRef}></input>
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group from__group-fast">
            <span>
              <i class="ri-team-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Setting the Location" ref={locationRef}></input>
            </div>
          </FormGroup>

          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SeachBar;
