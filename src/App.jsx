//import { Card, Row, Col, Divider, Input, Button } from "antd";
import "./App.css";
import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodRender, setFoodRender] = useState(foods);
  const addNewFood = (newFood) => {
    const updatedFoods = [newFood, ...foodList];
    setFoodList(updatedFoods);
    setFoodRender(updatedFoods);
  };

  const filterFood = (search) => {
    const newArray = foodList.filter((currentFood) =>
      currentFood.name.includes(search)
    );
    setFoodRender(newArray);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood} />

      <Search filterFood={filterFood} />

      {foodRender.map((currentFood) => (
        <FoodBox currentFood={currentFood} />
      ))}
    </div>
  );
}
export default App;
