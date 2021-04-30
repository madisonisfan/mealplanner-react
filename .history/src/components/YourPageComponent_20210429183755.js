import React from "react";
import { Row, Col, Button } from "reactstrap";

function MainYourPage(props) {
  return (
    <React.Fragment>
      <div className="container">
        <Row>
          <Col xs={12}>
            <h2 className="text-center">Your Page</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Favorites</Button>
          </Col>
          <Col>
            <Button>Your Posts</Button>
          </Col>
          <Col>
            <Button>Your Recipes</Button>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default MainYourPage;
