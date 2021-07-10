import React, { Component } from "react";
import PageTitleComponent from "./PageTitleComponent";
import { Row, Col, Button, Modal, ModalHeader } from "reactstrap";
import { LocalForm, Control } from "react-redux-form"; // Errors
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

function Favorites(props) {
  return (
    <React.Fragment>
      <PageTitleComponent title="Favorites" />
    </React.Fragment>
  );
}

export default Favorites;
