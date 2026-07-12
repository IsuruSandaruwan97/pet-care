import { Services as ServicesScreen } from "@/screens/services";
import type { Metadata } from "next";
import { routes } from "@/config/site";

const route = routes.find((item) => item.path === "/services");

export const metadata: Metadata = {
  title: route?.title,
  description: route?.description,
};

export default function Services() {
  return <ServicesScreen />;
}
