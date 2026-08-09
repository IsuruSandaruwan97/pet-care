import { Pricing as PricingScreen } from "@/screens/pricing";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata("/pricing");

export default function Pricing() {
  return <PricingScreen />;
}
