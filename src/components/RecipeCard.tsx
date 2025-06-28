import { Recipe } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
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
    </motion.div>
  );
};

export default RecipeCard;