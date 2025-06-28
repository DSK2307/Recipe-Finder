import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Your Favorite Recipes",
  description: "View your saved favorite recipes",
};

const FavoritesClientComponent = dynamic(
  () => import("./FavoritesClientComponent")
);

export default function FavoritesPage() {
  return <FavoritesClientComponent />;
}