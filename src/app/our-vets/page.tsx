import { OurVets as OurVetsScreen } from "@/screens/our-vets";
import type { Metadata } from "next";
import { routes } from "@/config/site";

const route = routes.find((item) => item.path === "/our-vets");

export const metadata: Metadata = {
  title: route?.title,
  description: route?.description,
};

export default function OurVets() {
  return <OurVetsScreen />;
}
