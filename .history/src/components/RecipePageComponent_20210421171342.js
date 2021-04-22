import React, { Component } from "react";
import { Button, Card, CardBody } from "reactstrap";

function MainRecipePage({ mealTypes, recipes }) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Recipes</h2>
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
  return mealTypes.map((mealType) => <Button>{mealType}</Button>);
}

function RenderRecipeCard({ recipes }) {
  // alert(`recipes: ${recipes}`);
  if (recipes) {
    return (
      <React.Fragment>
        {recipes.map((recipe) => {
          <div className="col">{recipe.name}</div>;
        })}
      </React.Fragment>
    );
  } else {
    return <div className="col">Problem with object</div>;
  }
}

export default MainRecipePage;
