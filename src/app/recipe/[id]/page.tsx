"use client";

import { Recipe } from "@/types";
import recipes from "@/data/recipes.json";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedMain from "@/components/AnimatedMain";
import { notFound } from "next/navigation";

export default function RecipeDetail({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r: Recipe) => r.id === params.id);

  if (!recipe) {
    notFound();
  }

  return (
    <AnimatedMain>
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-block mb-6 text-orange-600 hover:text-orange-500 transition-colors font-medium"
        >
          ← Back to Home
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md overflow-hidden lg:flex"
        >
          <div className="lg:w-1/2 relative h-64 lg:h-auto">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
          <div className="p-6 lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {recipe.title}
            </h1>
            <div className="flex justify-between text-gray-600 mb-4">
              <p>
                <span className="font-semibold">Prep Time:</span>{" "}
                {recipe.prepTime}
              </p>
              <p>
                <span className="font-semibold">Servings:</span>{" "}
                {recipe.servings}
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-orange-600 mb-2">
                Ingredients
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-orange-600 mb-2">
                Instructions
              </h2>
              <ol className="list-decimal list-inside text-gray-600">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedMain>
  );
}