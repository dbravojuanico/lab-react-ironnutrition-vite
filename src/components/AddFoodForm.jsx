import React, { useState } from "react";

function AddFoodForm({ addFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    addFood(newFood);
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input value={name} type="text" name="name" onChange={handleNameInput} />
      <label>Image</label>
      <input
        value={image}
        type="text"
        name="image"
        onChange={handleImageInput}
      />
      <label>Calories</label>
      <input
        value={calories}
        type="text"
        name="calories"
        onChange={handleCaloriesInput}
      />
      <label>Servings</label>
      <input
        value={servings}
        type="text"
        name="servings"
        onChange={handleServingsInput}
      />
      <button type="submit">Add food</button>
    </form>
  );
}

export default AddFoodForm;
