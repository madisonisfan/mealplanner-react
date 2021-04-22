import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Card>
            <CardBody>
              <CardHeader>
                <h3>Post</h3>
              </CardHeader>
              <p>
                In the blog section, you are able to create posts. These posts
                could be questions, advice, random thoughts, or really just
                anything.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="col">
          <Card>
            <CardBody>
              <CardHeader>
                <h3>Post</h3>
              </CardHeader>
              <p>
                In the blog section, you are able to create posts. These posts
                could be questions, advice, random thoughts, or really just
                anything.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="col">
          <Card>
            <CardBody>
              <CardHeader>
                <h3>Post</h3>
              </CardHeader>
              <p>
                In the blog section, you are able to create posts. These posts
                could be questions, advice, random thoughts, or really just
                anything.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
