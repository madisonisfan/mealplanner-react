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
        <Row>
          <Col>
            <RenderPost post={post} />
          </Col>
        </Row>
      );
    });
    return (
      <React.Fragment>
        <div className="container">
          <Row>
            <Col>
              <h2>Blog</h2>
            </Col>

            <Col>{allPosts}</Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

function RenderPost({ post }) {
  return (
    
        <h4>{post.author}</h4>
      
        <p>{post.text}</p>
     
  );
}

export default MainBlogPage;
