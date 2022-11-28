import React from "react";
import AddNewFood from "./AddNewFood/AddNewFood";
import FoodList from "./FoodList/FoodList";
function Food(props) {
  return (
    <>
      <AddNewFood />
      <FoodList />
    </>
  );
}
export default Food;
