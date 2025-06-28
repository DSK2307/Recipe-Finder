export interface Recipe {
  id: string;
  title: string;
  image: string;
  prepTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
}