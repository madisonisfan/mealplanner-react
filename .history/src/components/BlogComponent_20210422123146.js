import React, { Component } from "react";
import { Row, Col } from "reactstrap";

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
