import getAllRecipes from "@/_actions/recipes";
import React from "react";

const MealsPage = async () => {
  const res = await getAllRecipes();
  console.log(res);
  return <div>MealsPage</div>;
};

export default MealsPage;
