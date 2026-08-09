import { PetCare as PetCareScreen } from "@/screens/pet-care";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata("/pet-care");

export default function PetCare() {
  return <PetCareScreen />;
}
