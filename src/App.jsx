//import { Card, Row, Col, Divider, Input, Button } from "antd";
import "./App.css";
import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const addNewFood = (newFood) => {
    const updatedFoods = [newFood, ...foodList];
    setFoodList(updatedFoods);
  };
  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood} />
      {foodList.map((currentFood) => (
        <FoodBox currentFood={currentFood} />
      ))}
    </div>
  );
}
export default App;
