import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

function MainYourPage({ userInfo }) {
  console.log(`goal: ${userInfo.goal}`);
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
      <RenderUserInfoTable userInfo={userInfo} />
    </React.Fragment>
  );
}

class RenderUserInfoTable extends Component {
  render() {
    return (
      <div class="container-fluid mt-4 user-info-container">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <h3>Your Information</h3>
              </CardHeader>
              <CardBody>
                <table className="table user-info-table">
                  <tbody>
                    <tr>
                      <th>Goal: </th>
                      <td>{this.props.userInfo.goal}</td>
                    </tr>
                    <tr>
                      <th>Preferences: </th>
                      <td>{this.props.userInfo.preferences}</td>
                    </tr>
                    <tr>
                      <th>Sensitivities: </th>
                      <td>{this.props.userInfo.sensitivities}</td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
          <RenderEditButton />
        </Row>
      </div>
    );
  }
}

class RenderEditButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <React.Fragment>
        <Col className="d-flex justify-content-center mt-2">
          <Button onClick={this.toggleModal}>Edit Information</Button>
        </Col>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}></ModalHeader>
          <ModalBody>Hello</ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default MainYourPage;
