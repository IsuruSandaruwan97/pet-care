import { Pricing as PricingScreen } from "@/screens/pricing";
import type { Metadata } from "next";
import { routes } from "@/config/site";

const route = routes.find((item) => item.path === "/pricing");

export const metadata: Metadata = {
  title: route?.title,
  description: route?.description,
};

export default function Pricing() {
  return <PricingScreen />;
}
