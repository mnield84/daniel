import type { Route } from "./+types/home";
import SlidingCardsSection from "../components/SlidingCardsSection";
import CellForgeSection from "~/components/CellForgeSection";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <CellForgeSection />
      <SlidingCardsSection />
    </>
  );
}
