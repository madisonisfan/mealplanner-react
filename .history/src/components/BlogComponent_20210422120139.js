import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class MainBlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Row>
            <Col>
              <h2>Blog</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <RenderPosts posts={this.props.posts} />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

function RenderPosts({ posts }) {
  const postLists = posts.map((post) => {
    <Col></Col>;
  });
  return { postLists };
}

export default MainBlogPage;
