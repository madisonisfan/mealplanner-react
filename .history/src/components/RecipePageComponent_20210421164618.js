import React, { Component } from "react";
import { Button } from "reactstrap";

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
      </div>
    </React.Fragment>
  );
}

function RenderButtons({ mealTypes }) {
  return mealTypes.map((mealType) => <Button>{mealType}</Button>);
}

export default MainRecipePage;
