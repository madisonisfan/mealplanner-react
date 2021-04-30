import React, { Component } from "react";
import { Row, Col, Button, Modal } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";

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
        <Button onClick={this.toggleModal}>Want to post something?</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <LocalForm onSubmit={(values) => this.handlePostSubmit(values)}>
            <Row className="form-group">
              <Col>
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
            </Row>
            <Col>
              <Control.textarea
                id="postContent"
                name="postContent"
                model=".postContent"
                rows="4"
                className="form-control"
              />
            </Col>
            <Col>
              <Button type="submit">Post</Button>
            </Col>
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
      <Col xs={12}>
        <p>{post.postContent}</p>
      </Col>
    </Row>
  );
}

export default MainBlogPage;
