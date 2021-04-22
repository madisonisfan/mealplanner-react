import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class MainBlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(`${this.props.posts}`);
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
              <RenderPosts posts={this.props.posts} />{" "}
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

function RenderPosts({ posts }) {
  console.log(`${posts}`);
  const postLists = posts.map((post) => {
    <Row>
      <Col>
        <h4>{post.author}</h4>
      </Col>
      <Col>
        <p>{post.text}</p>
      </Col>
    </Row>;
  });
  return { postLists };
}

export default MainBlogPage;
