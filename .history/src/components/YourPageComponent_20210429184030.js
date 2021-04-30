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
          <Col>
            <Button className="d-flex justify-content-center">
              Your Posts
            </Button>
          </Col>
          <Col>
            <Button className="d-flex justify-content-center">
              Your Recipes
            </Button>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default MainYourPage;
