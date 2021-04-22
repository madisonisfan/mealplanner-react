import React, { Component } from "react";

function MainRecipePage({ mealTypes, recipes }) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Recipes</h2>
          </div>
          <RenderButtons mealTypes={mealTypes} />
        </div>
      </div>
    </React.Fragment>
  );
}

function RenderButtons({ mealTypes }) {
  mealTypes.map((mealType) => {
    return <Button>{mealType}</Button>;
  });
}

export default MainRecipePage;
