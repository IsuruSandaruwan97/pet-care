import { Facilities as FacilitiesScreen } from "@/screens/facilities";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata("/facilities");

export default function Facilities() {
  return <FacilitiesScreen />;
}
