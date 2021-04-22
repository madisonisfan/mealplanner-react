import React, { Component } from "react";
import { Button, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

function MainRecipePage({ selectedType, mealTypes, recipes }) {
  console.log(`selected Type ${selectedType}`);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Recipe: {selectedType}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <RenderButtons mealTypes={mealTypes} />
          </div>
        </div>
        <div className="row">
          <RenderRecipeCard recipes={recipes} />
        </div>
      </div>
    </React.Fragment>
  );
}

function RenderButtons({ mealTypes }) {
  return mealTypes.map((type) => (
    <Link to={`/recipes/${type.mealType}`}>{type.title}</Link>
  ));
}

function RenderRecipeCard({ recipes }) {
  //alert(`recipes: ${recipes.map((recipe) => recipe.name)}`);
  if (recipes) {
    return (
      <React.Fragment>
        {recipes.map((recipe) => {
          return (
            <div className="col">
              <Card key={recipe.id}>
                <CardBody>
                  <h5>{recipe.name}</h5>
                  <p>{recipe.description}</p>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </React.Fragment>
    );
  } else {
    return <div className="col">Problem with object</div>;
  }
}

export default MainRecipePage;
