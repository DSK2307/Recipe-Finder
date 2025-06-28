"use client";

import { useState } from "react";
import { Recipe } from "@/types";
import RecipeCard from "@/components/RecipeCard";
import recipes from "@/data/recipes.json";
import { motion } from "framer-motion";
import AnimatedMain from "@/components/AnimatedMain";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter recipes based on search query (case-insensitive)
  const filteredRecipes = recipes.filter((recipe: Recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <AnimatedMain>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <h1 className="text-4xl font-bold text-orange-600 text-center mb-4">
            Recipe Finder
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search recipes by name or ingredient..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 text-gray-800 placeholder-gray-400"
              aria-label="Search recipes by name or ingredient"
              autoComplete="off"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>
        {filteredRecipes.length > 0 ? (
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
            {filteredRecipes.map((recipe: Recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-600 text-lg"
          >
            No recipes found. Try a different search term!
          </motion.p>
        )}
      </div>
    </AnimatedMain>
  );
}