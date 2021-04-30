import React from "react";
import { Row, Col, Button } from "reactstrap";

function MainYourPage(props) {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Row>
          <Col xs={12}>
            <h2 className="text-center">Your Page</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Button>Favorites</Button>
          </Col>
        </Row>
        <Col className="d-flex justify-content-end">
          <Button>Your Posts</Button>
        </Col>
        <Col className="d-flex justify-content-start">
          <Button>Your Recipes</Button>
        </Col>
      </div>
    </React.Fragment>
  );
}

export default MainYourPage;
