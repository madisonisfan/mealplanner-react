import React, { Component } from "react";
import { Button, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
function MainRecipePage({ selectedType, mealTypes, recipes }) {
  //alert(`mealTypes: ${mealTypes}`);
  console.log(`${selectedType}`);
  /* console.log(`${mealTypes}`);
  console.log(`${mealTypes.map((typeObj) => typeObj.mealType)}`);

  console.log(
    `${mealTypes.filter((typeObj) => typeObj.mealType === selectedType)[0]}`
  );
  const title = mealTypes.filter(
    (typeObj) => typeObj.mealType === selectedType
  )[0];
  console.log(`${title}`); */
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>
              Recipe:{" "}
              {mealTypes.filter((type) => type.mealType === selectedType)}
            </h2>
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
    <Button to={`recipes/${type.mealType}`}>{type.title}</Button>
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
              <Card>
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
