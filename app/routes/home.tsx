import type { Route } from "./+types/home";
import SlidingCardsSection from "../components/SlidingCardsSection";
import CellForgeSection from "~/components/CellForgeSection";
import Hero from "~/components/Hero";
import PartnersSection from "../components/PartnersSection";
import TeamSection from "../components/TeamSection";
import FutureCellTherapiesSection from "../components/FutureCellTherapiesSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "iORGANBIO" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <CellForgeSection />
      <SlidingCardsSection />
      <PartnersSection />
      <TeamSection />
      <FutureCellTherapiesSection />
    </>
  );
}
