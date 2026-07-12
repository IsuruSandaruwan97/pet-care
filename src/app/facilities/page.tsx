import { Facilities as FacilitiesScreen } from "@/screens/facilities";
import type { Metadata } from "next";
import { routes } from "@/config/site";

const route = routes.find((item) => item.path === "/facilities");

export const metadata: Metadata = {
  title: route?.title,
  description: route?.description,
};

export default function Facilities() {
  return <FacilitiesScreen />;
}
