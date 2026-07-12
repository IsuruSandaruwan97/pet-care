export const siteConfig = {
  name: "Happy Paws",
  legalName: "Happy Paws Veterinary & Pet Care",
  tagline: "Compassionate care for your cats and dogs, every step of the way.",
  description:
    "Professional and warm veterinary care for cats and dogs, from routine checkups to emergency support.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://happy-paws-demo.com",
  locale: "en_US",
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
    title: "Happy Paws | Compassionate Veterinary Care",
    template: "%s | Happy Paws",
    description:
      "Professional and warm veterinary care for your beloved pets. Book your appointment today with our certified vets.",
    ogImage: "/api/media/pet-care",
  },
};

export const routes = [
  {
    path: "/",
    title: "Compassionate Veterinary Care",
    description:
      "Book veterinary care for cats and dogs with wellness visits, emergency support, pet care tips, and transparent pricing.",
  },
  {
    path: "/about-us",
    title: "About Us",
    description:
      "Learn about the Happy Paws veterinary team, clinic story, and fear-free care philosophy.",
  },
  {
    path: "/services",
    title: "Veterinary Services",
    description:
      "Explore wellness exams, vaccinations, dental care, surgery, diagnostics, grooming, boarding, and urgent care services.",
  },
  {
    path: "/facilities",
    title: "Facilities",
    description:
      "Tour the reception area, exam rooms, surgical suite, diagnostics spaces, and pet boarding facilities.",
  },
  {
    path: "/our-vets",
    title: "Our Vets",
    description:
      "Meet the licensed veterinarians and care team behind Happy Paws.",
  },
  {
    path: "/pet-care",
    title: "Pet Care Tips",
    description:
      "Read clinic-tested pet care guidance for puppies, kittens, senior pets, nutrition, dental health, and warning signs.",
  },
  {
    path: "/pricing",
    title: "Pricing",
    description:
      "Compare transparent pet care packages for puppies, kittens, annual wellness, senior pets, and emergency visits.",
  },
] as const;

export const formatAddress = () =>
  `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;
