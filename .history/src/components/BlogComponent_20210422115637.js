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
            <RenderPosts posts={this.props.posts} />
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

function RenderPosts({ posts }) {
  return;
}

export default MainBlogPage;
