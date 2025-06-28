"use client";

import { Recipe } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useFavorites } from "@/context/FavoritesContext";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const handleToggleFavorite = () => {
    if (isFavorite(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
      className="bg-white rounded-lg shadow-md overflow-hidden relative"
    >
      <Link href={`/recipe/${recipe.id}`}>
        <div className="relative h-48">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 truncate">
            {recipe.title}
          </h2>
          <div className="flex justify-between mt-2 text-gray-600">
            <p>{recipe.prepTime}</p>
            <p>{recipe.servings} servings</p>
          </div>
        </div>
      </Link>
      <motion.button
        onClick={handleToggleFavorite}
        className={`absolute top-2 right-2 p-2 rounded-full ${
          isFavorite(recipe.id) ? "bg-red-500" : "bg-gray-200"
        } text-white`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={
          isFavorite(recipe.id)
            ? `Remove ${recipe.title} from favorites`
            : `Add ${recipe.title} to favorites`
        }
      >
        <svg
          className="w-5 h-5"
          fill={isFavorite(recipe.id) ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default RecipeCard;