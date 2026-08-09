import { AboutUs as AboutUsScreen } from "@/screens/about-us";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata("/about-us");

export default function AboutUs() {
  return <AboutUsScreen />;
}
