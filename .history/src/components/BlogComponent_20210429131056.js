import React, { Component } from "react";
import { Row, Col, Button, Modal, ModalHeader } from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

class MainBlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(`${this.props.posts.posts}`);
    const allPosts = this.props.posts.posts.map((post) => {
      return (
        <RenderPost
          post={post}
          isLoading={this.props.isLoading}
          errMess={this.props.errMess}
        />
      );
    });
    return (
      <React.Fragment>
        <h2 className="text-center">Blog</h2>
        <div className="container-fluid text-center mx-auto">
          <Row>
            <Col xs={12}>
              <AddPostForm resetPostForm={this.props.resetPostForm} />
            </Col>
          </Row>
        </div>
        <div className="container-fluid mx-auto blog-container">
          <Row>
            <Col xs={12}>{allPosts}</Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

class AddPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postType: "Post Type",
      postContent: "",
      isModalOpen: false,
    };
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handlePostSubmit(values) {
    alert(`New Post: ${JSON.stringify(values)}`);
    this.props.resetPostForm();
    //window.location.reload(false);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <React.Fragment>
        <Button className="create-post-butt" onClick={this.toggleModal}>
          Want to post something?
        </Button>
        <Modal
          className="create-post-modal"
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
        >
          <ModalHeader toggle={this.toggleModal}>
            <h2 className="text-center">Create Post</h2>
          </ModalHeader>
          <Form
            model=".postForm"
            onSubmit={(values) => this.handlePostSubmit(values)}
          >
            <div className="container-fluid mx-auto">
              <Row className="form-group create-post-row">
                <Col xs={12}>
                  <Control.select
                    id="postType"
                    name="postType"
                    model=".postType"
                    className="form-control mb-2"
                  >
                    <option>Post Type</option>
                    <option>Question</option>
                    <option>Advice</option>
                    <option>Other</option>
                  </Control.select>
                </Col>

                <Col xs={12}>
                  <Control.textarea
                    id="postContent"
                    name="postContent"
                    model=".postContent"
                    rows="4"
                    className="form-control mb-2"
                  />
                </Col>
                <Col xs={12}>
                  <Button type="submit">Post</Button>
                </Col>
              </Row>
            </div>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}

function RenderPost({ post, isLoading, errMess }) {
  /* if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return <h4>{errMess}</h4>;
  } */

  return (
    <Row className="post-row">
      <Col xs={12}>
        <h4>{post.author}</h4>
      </Col>
      <Col className="post-date" xs={12}>
        <p>{post.date}</p>
      </Col>
      <Col xs={12}>
        <p>{post.postContent}</p>
      </Col>
      <Col xs={12}>
        <div id="post-header-line"></div>
      </Col>
      <Col xs={6} className="post-buttons">
        <Link style={{ color: "black" }}>Like</Link>
      </Col>
      <Col xs={6} className="post-buttons">
        <Link style={{ color: "black" }}>Comment</Link>
      </Col>
    </Row>
  );
}

export default MainBlogPage;
