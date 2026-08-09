import HomePage from "@/screens/home-page";
import { createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata("/");

export default function Home() {
  return <HomePage />;
}
