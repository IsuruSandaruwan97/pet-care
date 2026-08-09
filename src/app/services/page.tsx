import { Services as ServicesScreen } from "@/screens/services";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata("/services");

export default function Services() {
  return <ServicesScreen />;
}
