import { Recipe } from "@/types";
import recipes from "@/data/recipes.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import RecipeDetailsContent from "@/components/RecipeDetailsContent";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const recipe = recipes.find((r: Recipe) => r.id === params.id);
  return {
    title: recipe ? `${recipe.title} - Recipe Finder` : "Recipe Not Found",
    description: recipe
      ? `View the recipe for ${recipe.title}`
      : "Recipe not found",
  };
}

export default function RecipeDetail({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r: Recipe) => r.id === params.id);

  if (!recipe) {
    notFound();
  }

  return <RecipeDetailsContent recipe={recipe} />;
}