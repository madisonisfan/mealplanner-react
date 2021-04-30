import React, { Component } from "react";
import { Row, Col, Button, Modal, ModalHeader } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

class MainBlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(`${this.props.posts}`);
    const allPosts = this.props.posts.map((post) => {
      return <RenderPost post={post} />;
    });
    return (
      <React.Fragment>
        <h2 className="text-center">Blog</h2>
        <div className="container-fluid text-center">
          <Row>
            <Col xs={12}>
              <AddPostForm />
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
    window.location.reload(false);
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
          <ModalHeader toggle={this.toggleModal}>Create Post</ModalHeader>
          <LocalForm onSubmit={(values) => this.handlePostSubmit(values)}>
            <Row className="form-group create-post-row">
              <Col xs={12}>
                <Control.select
                  id="postType"
                  name="postType"
                  model=".postType"
                  className="form-control"
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
                  className="form-control"
                />
              </Col>
              <Col xs={12}>
                <Button type="submit">Post</Button>
              </Col>
            </Row>
          </LocalForm>
        </Modal>
      </React.Fragment>
    );
  }
}

function RenderPost({ post }) {
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
