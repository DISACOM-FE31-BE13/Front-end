import React from "react";
import InfoCard from "../../shared/InfoCard";
import { Col } from "reactstrap";
import useFetch from "./../../hooks/userFetch";
import { BASE_URL } from "../../utils/config";

const InformationList = () => {
  const { data: infolist, loading, error } = useFetch(`${BASE_URL}/info/search/getInformationList`);
  console.log(infolist);
  return (
    <>
      {loading && <h4>Loading..........</h4>}

      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        infolist?.map((info) => (
          <Col lg="3" className="mb-4" key={info._id}>
            <InfoCard info={info} />
          </Col>
        ))}
    </>
  );
};

export default InformationList;
