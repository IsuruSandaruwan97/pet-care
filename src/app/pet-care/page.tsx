import { PetCare as PetCareScreen } from "@/screens/pet-care";
import type { Metadata } from "next";
import { routes } from "@/config/site";

const route = routes.find((item) => item.path === "/pet-care");

export const metadata: Metadata = {
  title: route?.title,
  description: route?.description,
};

export default function PetCare() {
  return <PetCareScreen />;
}
