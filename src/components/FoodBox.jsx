import React from "react";

function FoodBox(props) {
  return (
    <div style={{ border: "2px solid red" }}>
      <h2>{props.currentFood.name}</h2>
      <img src={props.currentFood.image} width={100} />
      <p>Calories: {props.currentFood.calories}</p>
      <p>Servings: {props.currentFood.servings}</p>
      <p>Total Calories: {props.currentFood.calories} kcal</p>
      <button>Delete</button>
    </div>
  );
}

export default FoodBox;
