import { AboutUs as AboutUsScreen } from "@/screens/about-us";
import type { Metadata } from "next";
import { routes } from "@/config/site";

const route = routes.find((item) => item.path === "/about-us");

export const metadata: Metadata = {
  title: route?.title,
  description: route?.description,
};

export default function AboutUs() {
  return <AboutUsScreen />;
}
