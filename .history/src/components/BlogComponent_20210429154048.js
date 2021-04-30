import React, { Component } from "react";
import { Row, Col, Button, Modal, ModalHeader } from "reactstrap";
import { Form, Control, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

function MainBlogPage({ posts, postsLoading, postsErrMess, resetPostForm }) {
  //console.log(`${posts.posts}`);
  //console.log(`isloading: ${posts.isLoading}`);
  const allPosts = posts.map((post) => {
    return (
      <RenderPost post={post} isLoading={postsLoading} errMess={postsErrMess} />
    );
  });

  /*  if (posts.isLoading) {
    console.log("loading");
    <div className="container">
      <div className="row">
        <Loading />
      </div>
    </div>;
  }
  if (posts.errMess) {
    return <h4>{posts.errMess}</h4>;
  } */

  return (
    <React.Fragment>
      <h2 className="text-center">Blog</h2>
      <div className="container-fluid text-center mx-auto">
        <Row>
          <Col xs={12}>
            <AddPostForm resetPostForm={resetPostForm} />
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

function RenderPost({ post, isLoading, errMess }) {
  //console.log(`isloading: ${isLoading}`);
  if (isLoading) {
    return <div>Hello</div>;
  }
  if (errMess) {
    return <h4>{errMess}</h4>;
  }

  return (
    <Row className="post-row" key={post.id}>
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
    this.toggleModal();
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

export default MainBlogPage;
