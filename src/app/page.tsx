import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Recipe Finder",
  description: "Discover delicious recipes with our modern recipe finder app",
};

const HomePage = dynamic(() => import("./client-page"));

export default function Page() {
  return <HomePage />;
}