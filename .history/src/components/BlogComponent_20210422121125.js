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
      return (
        <Col>
          <RenderPost post={post} />
        </Col>
      );
    });
    return (
      <React.Fragment>
        <div className="container">
          <Row>
            <Col>
              <h2>Blog</h2>
            </Col>
          </Row>
          <Row>{allPosts}</Row>
        </div>
      </React.Fragment>
    );
  }
}

function RenderPosts({ post }) {
  return (
    <Row>
      <Col></Col>
    </Row>
  );
}

export default MainBlogPage;