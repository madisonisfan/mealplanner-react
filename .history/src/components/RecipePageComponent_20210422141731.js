import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
  Col,
  Row,
  Media,
  Body,
} from "reactstrap";
//import { Media, MediaBody } from "react-media";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { LocalForm, Control, Errors } from "react-redux-form";

function MainRecipePage({ selectedType, mealTypes, recipes }) {
  console.log(`selected Type ${selectedType}`);
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2 className="recipeHeader">Recipe: {selectedType}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col meal-buttons-col">
            <RenderButtons mealTypes={mealTypes} />
          </div>
        </div>
        <div className="row recipe-card-row">
          <RenderRecipeCard recipes={recipes} />
        </div>
      </div>
    </React.Fragment>
  );
}

class AddRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      recipeName: "",
      recipeDescription: "",
      cooktime: "",
      preptime: "",
      calories: "",
      servings: "",
      ingredients: " ",
      instructions: " ",
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  recipeSubmit(values) {
    console.log(`New Recipe: ${JSON.stringify(values)}`);
    this.toggleModal();
  }

  render() {
    return (
      <React.Fragment>
        <Button className="add-recipe-butt" onClick={this.toggleModal}>
          Add Recipe
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Add Recipe</ModalHeader>
          <ModalBody>
            <LocalForm
              onSubmit={(values) => {
                this.recipeSubmit(values);
              }}
            >
              <Label htmlFor="recipeName">Recipe Name</Label>
              <Control.text
                model=".recipeName"
                id="recipeName"
                name="recipeName"
                className="form-control"
                placeholder="Recipe Name"
              />
              <Label htmlFor="recipeDescription">Recipe Name</Label>
              <Control.text
                model=".recipeDescription"
                id="recipeDescription"
                name="recipeDescription"
                className="form-control"
                placeholder="Brief description of the recipe"
              />
              <Label htmlFor="cooktime">Cooktime</Label>
              <Control.text
                model=".cooktime"
                id="cooktime"
                name="cooktime"
                className="form-control"
                placeholder="Cooktime in minutes"
              />
              <Label htmlFor="preptime">Preptime</Label>
              <Control.text
                model=".preptime"
                id="preptime"
                name="preptime"
                className="form-control"
                placeholder="Preptime in minutes"
              />
              <Label htmlFor="calories">Calories</Label>
              <Control.text
                model=".calories"
                id="calories"
                name="calories"
                className="form-control"
                placeholder="Calories per serving"
              />
              <Label htmlFor="servings">Servings</Label>
              <Control.text
                model=".servings"
                id="servings"
                name="servings"
                className="form-control"
                placeholder="Total servings"
              />
              <Label htmlFor="ingredients">Ingredients</Label>
              <Control.textarea
                model=".ingredients"
                id="ingredients"
                name="ingredients"
                className="form-control"
                rows="6"
                placeholder="Ingredients"
              />
              <Label htmlFor="instructions">Instructions</Label>
              <Control.textarea
                model=".instructions"
                id="instructions"
                name="instructions"
                className="form-control"
                rows="10"
                placeholder="Instructions"
              />
              <Button type="submit">Submit Recipe</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
function RenderButtons({ mealTypes }) {
  return (
    <React.Fragment>
      {mealTypes.map((type) => (
        <Button className="meal-type-button">
          <Link
            style={{ color: "black" }}
            key={type.id}
            to={`/recipes/${type.mealType}`}
          >
            {type.title}
          </Link>
        </Button>
      ))}
      <AddRecipeForm />
    </React.Fragment>
  );
}

function RenderRecipeCard({ recipes }) {
  //alert(`recipes: ${recipes.map((recipe) => recipe.name)}`);
  if (recipes) {
    return (
      <React.Fragment>
        {recipes.map((recipe) => {
          return (
            <React.Fragment>
              <div key={recipe.id} className="col-4 d-none d-md-block">
                <Card className="recipe-card mx-auto">
                  <img class="card-img-top recipe-img" src={recipe.image} />
                  <CardBody>
                    <Link style={{ color: "black" }}>
                      <h5>{recipe.name}</h5>
                    </Link>
                    <p>{recipe.description}</p>
                  </CardBody>
                </Card>
              </div>

              <div className="recipe-container-sm  mx-auto d-block d-md-none">
                <Col xs={12} className="recipe-box-sm">
                  <Media>
                    <Media left>
                      <img
                        className="d-flex recipe-img-sm"
                        src={recipe.image}
                      />
                    </Media>

                    <Media body class="recipe-sm-body">
                      <Link style={{ color: "black" }}>
                        <h5>{recipe.name}</h5>
                      </Link>
                      <p>{recipe.description}</p>
                    </Media>
                  </Media>
                </Col>
              </div>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  } else {
    return <div className="col">Problem with object</div>;
  }
}

export default MainRecipePage;
