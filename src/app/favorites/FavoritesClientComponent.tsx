"use client";

import recipes from "@/data/recipes.json";
import RecipeCard from "@/components/RecipeCard";
import AnimatedMain from "@/components/AnimatedMain";
import { motion } from "framer-motion";
import { useFavorites } from "@/context/FavoritesContext";

export default function FavoritesClientComponent() {
  const { favorites } = useFavorites();
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id),
  );

  return (
    <AnimatedMain>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-orange-600 text-center mb-4">
            Your Favorite Recipes
          </h1>
        </motion.div>
        {favoriteRecipes.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-600 text-center"
          >
            No favorite recipes yet. Add some from the home page!
          </motion.p>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </motion.div>
        )}
      </div>
    </AnimatedMain>
  );
}