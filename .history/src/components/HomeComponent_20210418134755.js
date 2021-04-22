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
                <h3>Preferences & Sensitivities</h3>
              </CardHeader>
              <p>
                Don't worry if you're a picky eater or have a very sensitive
                stomach, there will still be plenty of options for you. On your
                page, you will be able to identify will foods to avoid.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="col">
          <Card>
            <CardBody>
              <CardHeader>
                <h3>Add Recipes</h3>
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
    </div> //container
  );
}

export default Home;
