import HomePage from "@/screens/home-page";
import type { Metadata } from "next";
import { routes } from "@/config/site";

const route = routes.find((item) => item.path === "/");

export const metadata: Metadata = {
  title: route?.title,
  description: route?.description,
};

export default function Home() {
  return <HomePage />;
}
