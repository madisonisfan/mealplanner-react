import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
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
        <div className="container-fluid">
          <Row>
            <Col>
              <h2>Blog</h2>
            </Col>
            <Col xs={12}>
              <AddPostForm />
            </Col>
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
      text: "",
    };
  }

  render() {
    return (
      <LocalForm>
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
            id="text"
            name="text"
            model=".text"
            rows="4"
            className="form-control"
          />
        </Col>
        <Col>
          <Button type="submit">Post</Button>
        </Col>
      </LocalForm>
    );
  }
}

function RenderPost({ post }) {
  return (
    <Row>
      <Col xs={12}>
        <h4>{post.author}</h4>
      </Col>
      <Col xs={12}>
        <p>{post.text}</p>
      </Col>
    </Row>
  );
}

export default MainBlogPage;
