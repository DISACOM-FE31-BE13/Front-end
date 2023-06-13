import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import communityImg from "../assets/images/community.png";
import privasiImg from "../assets/images/privasi.png";
import InformationImg from "../assets/images/information.png";

const servicesData = [
  {
    imgUrl: communityImg,
    title: "Community",
    desc: "Building a community that is interconnected and has a positive impact on each other in various aspects in the future.",
  },
  {
    imgUrl: privasiImg,
    title: "Privacy Security",
    desc: "We protect your data and personal information and giving you control is a big responsibility and requires hard work.",
  },
  {
    imgUrl: InformationImg,
    title: "Motivation & Information",
    desc: "Provide job information that is in accordance with the abilities you have, and provide motivation to continue to develop your potential.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
