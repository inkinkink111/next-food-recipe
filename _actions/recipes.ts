"use server";

import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/connectDB";
import recipeModel from "@/Models/recipes";

export default async function getAllRecipes() {
  try {
    await dbConnect();
    const recipes = await recipeModel.find();
    const data = JSON.parse(JSON.stringify(recipes));
    return { message: "get", data: data };
    // const recipes = await recipeModel.find(); // Fetch all recipes
    // res.status(200).json(recipes);
  } catch (error: any) {
    // res.status(500).json({ message: error.message });
    return { message: error.message };
  }
}
