import React from "react";
import { Row, Col } from "reactstrap";

function MainYourPage(props) {
  return (
    <React.Fragment>
      <div className="container">
        <Row>
          <Col xs={12}>
            <h2 className="text-center">Your Page</h2>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default MainYourPage;
