const normalizeSiteUrl = (url: string) => url.replace(/\/+$/, "");

export const siteConfig = {
  name: "Happy Paws",
  legalName: "Happy Paws Veterinary & Pet Care",
  tagline: "Compassionate care for your cats and dogs, every step of the way.",
  description:
    "Professional and warm veterinary care for cats and dogs, from routine checkups to emergency support.",
  url: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL || "https://happy-paws-demo.com",
  ),
  locale: "en_US",
  template: {
    productName: "Happy Paws Pet Care & Veterinary Website Template",
    shortName: "Happy Paws Template",
    category: "Pet Care & Veterinary Website Template",
    techStack: ["TypeScript", "JavaScript", "Next.js", "React", "Tailwind CSS"],
    features: [
      "Responsive veterinary clinic homepage design",
      "Services, facilities, team, pricing, and pet care pages",
      "Appointment request flow with optional webhook integration",
      "SEO metadata, sitemap, robots, and structured data",
      "Motion animations, carousels, and modern pet care UI sections",
    ],
    author: {
      name: "Shadowisk",
      url: "https://shadowisk.com",
    },
  },
  address: {
    street: "123 Main Street",
    city: "Your City",
    region: "ST",
    postalCode: "00000",
    country: "US",
  },
  contact: {
    phone: "(555) 123-4567",
    phoneHref: "tel:+15551234567",
    emergencyPhone: "(555) 999-0000",
    emergencyPhoneHref: "tel:+15559990000",
    email: "hello@happypawsvet.com",
    emailHref: "mailto:hello@happypawsvet.com",
  },
  hours: {
    short: "Mon-Sat: 8 AM-7 PM",
    full: "Mon-Fri: 8 AM-7 PM | Sat: 9 AM-4 PM | Sun: Closed",
    schema: ["Mo-Fr 08:00-19:00", "Sa 09:00-16:00"],
  },
  socialLinks: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },
  seo: {
    title:
      "Pet Care & Veterinary Website Template | Next.js Demo | Happy Paws",
    template: "%s | Happy Paws Template",
    description:
      "Live preview of a modern Next.js pet care and veterinary website template with responsive design, services, facilities, vet profiles, pricing, pet care tips, FAQs, and SEO-ready pages.",
    ogImage: "/api/media/pet-care",
    ogImageAlt:
      "Next.js pet care and veterinary website template homepage preview design",
    lastUpdated: "2026-08-09",
  },
};

type SitemapSettings = {
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

export const routes = [
  {
    path: "/",
    title: "Pet Care & Veterinary Website Template Demo",
    description:
      "Preview a responsive Next.js pet care and veterinary website template with homepage hero design, services, pricing, team profiles, FAQs, and appointment-ready sections.",
    keywords: [
      "nextjs pet care template demo",
      "veterinary website template preview",
      "pet clinic website design demo",
    ],
    sitemap: {
      changeFrequency: "weekly",
      priority: 1,
    },
  },
  {
    path: "/about-us",
    title: "About Page - Veterinary Website Template",
    description:
      "About page layout from a Next.js veterinary website template with story sections, mission blocks, founder profile, and clinic gallery design.",
    keywords: [
      "veterinary about page template",
      "pet care about us website design",
      "clinic story page template",
    ],
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  {
    path: "/services",
    title: "Services Page - Pet Care Website Template",
    description:
      "Services page design for a pet care website template featuring wellness, emergency care, surgery, grooming, boarding, and veterinary service cards.",
    keywords: [
      "veterinary services page template",
      "pet care services website design",
      "vet clinic service layout template",
    ],
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
  {
    path: "/facilities",
    title: "Facilities Page - Vet Clinic Website Template",
    description:
      "Facilities page preview for a veterinary website template with reception, exam room, surgical suite, and boarding section designs.",
    keywords: [
      "veterinary facilities page template",
      "pet hospital website design",
      "clinic facilities layout template",
    ],
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.7,
    },
  },
  {
    path: "/our-vets",
    title: "Team Page - Veterinary Website Template",
    description:
      "Veterinarian team page from a responsive pet care website template with profile cards, specialties, and staff layout design.",
    keywords: [
      "veterinary team page template",
      "vet profile website design",
      "pet clinic staff page template",
    ],
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.8,
    },
  },
  {
    path: "/pet-care",
    title: "Pet Care Tips Page - Website Template",
    description:
      "Pet care tips page design in a Next.js veterinary website template with blog-style cards, articles, and educational content sections.",
    keywords: [
      "pet care blog template",
      "veterinary tips page design",
      "pet care articles website template",
    ],
    sitemap: {
      changeFrequency: "weekly",
      priority: 0.7,
    },
  },
  {
    path: "/pricing",
    title: "Pricing Page - Pet Care Website Template",
    description:
      "Pricing page layout for a veterinary website template with wellness packages, transparent plan cards, and conversion-focused pet care pricing design.",
    keywords: [
      "veterinary pricing page template",
      "pet care pricing website design",
      "vet clinic packages page template",
    ],
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.9,
    },
  },
] as const satisfies ReadonlyArray<{
  path: string;
  title: string;
  description: string;
  keywords: readonly string[];
  sitemap: SitemapSettings;
}>;

export const getAbsoluteUrl = (path = "/") =>
  new URL(path, `${siteConfig.url}/`).toString();

export const formatAddress = () =>
  `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;
