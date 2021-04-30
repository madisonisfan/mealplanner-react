import React from "react";
import { Row, Col, Button, Card, CardBody, CardHeader } from "reactstrap";

function MainYourPage({ userInfo }) {
  /*
  can use userInfo.isLoading and userInfo.errMess
  */
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
        <Row className="mt-2">
          <Col className="d-flex justify-content-end">
            <Button>Your Posts</Button>
          </Col>
          <Col className="d-flex justify-content-start">
            <Button>Your Recipes</Button>
          </Col>
        </Row>
      </div>
      <div class="container-fluid mt-4">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h3>Your Information</h3>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default MainYourPage;
