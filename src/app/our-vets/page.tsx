import { OurVets as OurVetsScreen } from "@/screens/our-vets";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata("/our-vets");

export default function OurVets() {
  return <OurVetsScreen />;
}
