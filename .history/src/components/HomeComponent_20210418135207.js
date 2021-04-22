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
                Any user can contribute to our lists of recipes. You can do this
                by uploading a recipe or filling out the form provided. The
                feature will create endless food choices for all of us to enjoy.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="col">
          <Card>
            <CardBody>
              <CardHeader>
                <h3>Customizable Mealplan</h3>
              </CardHeader>
              <p>
                You will be able to plan your meals for each meal type, for the
                entire week. This will keep you organized and motivated. The
                recipes will be accessible directly from your meal plan.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="col-12 text-center">
          <h2>Build A Community</h2>
          <p>With our program you are never alone</p>
        </div>
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
              <h3>Customizable Mealplan</h3>
            </CardHeader>
            <p>
              You will be able to plan your meals for each meal type, for the
              entire week. This will keep you organized and motivated. The
              recipes will be accessible directly from your meal plan.
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="col">
        <Card>
          <CardBody>
            <CardHeader>
              <h3>Customizable Mealplan</h3>
            </CardHeader>
            <p>
              You will be able to plan your meals for each meal type, for the
              entire week. This will keep you organized and motivated. The
              recipes will be accessible directly from your meal plan.
            </p>
          </CardBody>
        </Card>
      </div>
      {/*row*/}
    </div> //container
  );
}

export default Home;
