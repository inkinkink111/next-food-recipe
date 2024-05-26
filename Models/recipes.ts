import { Schema, model, models, Document } from "mongoose";

interface IRecipe extends Document {
  id: string;
  slug: string;
  image: string;
  name: string;
  description: string;
  tags: string[];
  creator: string;
  creator_email: string;
  instructions: string[];
  ingredients: string[];
}

const recipesSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  creator_email: {
    type: String,
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
});

const recipeModel = models.recipe || model<IRecipe>("recipe", recipesSchema);

export default recipeModel;
