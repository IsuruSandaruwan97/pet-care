export const trustChips = [
  "15+ Years of Experience",
  "10,000+ Happy Pets Treated",
  "Certified & Licensed Veterinarians",
  "Same-Day Appointments Available",
];

export const stats = [
  ["15+", "Years Serving the Community"],
  ["6", "Certified Veterinarians on Staff"],
  ["98%", "Client Satisfaction Rate"],
  ["24/7", "Emergency Support"],
];

export const whyCards = [
  [
    "stethoscope",
    "Experienced, Caring Vets",
    "Every member of our team is licensed, certified, and genuinely loves animals.",
  ],
  [
    "biotech",
    "Modern Equipment",
    "On-site diagnostics mean faster answers and faster treatment.",
  ],
  [
    "favorite",
    "Fear-Free Approach",
    "We use gentle handling techniques to keep visits low-stress for nervous pets.",
  ],
  [
    "receipt_long",
    "Transparent Pricing",
    "No hidden fees. You'll always know the cost before we proceed.",
  ],
  [
    "schedule",
    "24/7 Emergency Access",
    "Because emergencies don't wait for business hours.",
  ],
  [
    "assignment",
    "Personalized Care Plans",
    "No cookie-cutter treatment. Every pet gets a plan built around their needs.",
  ],
];

export const services = [
  [
    "verified_user",
    "Wellness & Preventive Care",
    "Annual checkups, vaccinations, parasite prevention, and early-detection screenings to keep small problems from becoming big ones.",
    false,
  ],
  [
    "vaccines",
    "Vaccinations",
    "Core and lifestyle vaccines for puppies, kittens, and adult pets, tailored to age, breed, and lifestyle.",
    false,
  ],
  [
    "sentiment_satisfied",
    "Dental Care",
    "Professional cleanings, dental X-rays, and extractions to keep teeth and gums healthy.",
    false,
  ],
  [
    "content_cut",
    "Surgery",
    "From spay/neuter to soft-tissue surgeries, performed with modern equipment and full anesthetic monitoring.",
    false,
  ],
  [
    "emergency_home",
    "Emergency & Urgent Care",
    "Same-day appointments and a 24-hour emergency line for accidents or sudden illness.",
    true,
  ],
  [
    "science",
    "Diagnostics & Lab Services",
    "On-site bloodwork, X-rays, ultrasound, and lab testing for fast, accurate diagnoses.",
    false,
  ],
  [
    "orthopedics",
    "Senior Pet Care",
    "Specialized wellness plans for aging cats and dogs, including arthritis management and organ health monitoring.",
    false,
  ],
  [
    "auto_awesome",
    "Grooming",
    "Baths, haircuts, nail trims, and ear cleaning to keep your pet looking and feeling their best.",
    false,
  ],
  [
    "home",
    "Boarding & Daycare",
    "Safe, supervised overnight boarding and daytime play while you're away or at work.",
    false,
  ],
  [
    "nutrition",
    "Nutrition Counseling",
    "Personalized diet plans for weight management, allergies, and breed-specific nutritional needs.",
    false,
  ],
  [
    "qr_code_scanner",
    "Microchipping",
    "Quick, painless microchipping so your pet can always find their way home.",
    false,
  ],
  [
    "videocam",
    "In-Home & Telehealth Visits",
    "Virtual consultations and at-home visits for pets who do better outside a clinic setting.",
    false,
  ],
] as const;

export const facilities = [
  [
    "Reception Area",
    "A warm and welcoming space designed for comfort.",
    "reception",
    "/api/media/facilities",
  ],
  [
    "Exam Room",
    "Modern diagnostics in a fear-free clinical setting.",
    "exam-room",
    "/api/media/exam",
  ],
  [
    "Surgical Suite",
    "Advanced technology for precise and safe procedures.",
    "surgery",
    "/api/media/surgery",
  ],
];

export const team = [
  [
    "Dr. Sarah Mitchell, DVM",
    "Lead Veterinarian - 15 yrs",
    "Specializing in internal medicine and senior pet wellness, Dr. Mitchell has a soft spot for grumpy old cats and the families who love them.",
    "TEAM HEADSHOT - Dr. Mitchell",
    "SM",
  ],
  [
    "Dr. James Okafor, DVM",
    "Surgical Specialist - 10 yrs",
    "Dr. Okafor leads our surgical team, with a particular focus on orthopedic and soft-tissue procedures for dogs of all sizes.",
    "TEAM HEADSHOT - Dr. Okafor",
    "JO",
  ],
  [
    "Dr. Priya Nair, DVM",
    "Feline & Exotic Care - 8 yrs",
    "A self-described cat whisperer, Dr. Nair has built her career around fear-free handling techniques for anxious feline patients.",
    "TEAM HEADSHOT - Dr. Nair",
    "PN",
  ],
  [
    "Dr. Michael Chen, DVM",
    "Emergency & Critical Care - 12 yrs",
    "Dr. Chen heads our emergency department, bringing calm, decisive care to high-stress situations.",
    "TEAM HEADSHOT - Dr. Chen",
    "MC",
  ],
];

export const pricing = [
  [
    "\u{1F436}",
    "Puppy & Kitten Starter",
    "$129",
    "",
    [
      "Initial health exam",
      "First round of core vaccinations",
      "Deworming treatment",
      "Microchipping",
      "Nutrition & care consultation",
    ],
    false,
  ],
  [
    "\u{1F43E}",
    "Annual Wellness",
    "$189",
    "/year",
    [
      "Annual physical exam",
      "Core vaccinations",
      "Parasite prevention screening",
      "Bloodwork panel",
      "Dental check",
    ],
    true,
  ],
  [
    "\u{1F9B4}",
    "Senior Pet Care",
    "$229",
    "/year",
    [
      "Comprehensive senior wellness exam",
      "Bloodwork & organ function panel",
      "Joint & mobility assessment",
      "Dental evaluation",
      "Personalized nutrition plan",
    ],
    false,
  ],
  [
    "\u{1F6A8}",
    "Emergency Visit",
    "$95",
    "start",
    ["Final cost depends on diagnostics and treatment required."],
    false,
  ],
] as const;

export const testimonials = [
  [
    "They treated my 14-year-old lab like she was their own. I've never felt so confident in a vet's hands.",
    "Amanda R.",
    "AR",
  ],
  [
    "Our cat hates vet visits, but the team here somehow made it stress-free for both of us.",
    "David L.",
    "DL",
  ],
  [
    "Fast, honest, and affordable. They explained every option before we made a decision.",
    "Priyanka S.",
    "PS",
  ],
  [
    "We had a middle-of-the-night emergency and they picked up immediately. Forever grateful.",
    "Marcus T.",
    "MT",
  ],
];

export const tips = [
  {
    title: "5 Signs Your Cat Might Be in Pain (That Owners Often Miss)",
    image: "/api/media/cat-in-pain",
  },
  {
    title: "Puppy's First Year: A Complete Vaccination Timeline",
    image: "/api/media/first-year-puppy",
  },
  {
    title: "Is Your Dog Overweight? How to Tell and What to Do",
    image: "/api/media/over-weight",
  },
  {
    title: "Senior Cat Care: What Changes After Age 10",
    image: "/api/media/senior-cat",
  },
  {
    title: "Dental Disease in Dogs: Why Bad Breath Is a Warning Sign",
    image: "/api/media/dental-disease",
  },
  {
    title: "How to Choose the Right Food for Your Pet's Life Stage",
    image: "/api/media/righ-food",
  },
];

export const faqs = [
  [
    "Do I need an appointment, or can I walk in?",
    "We recommend booking ahead to minimize wait times, but we accept urgent walk-ins whenever possible.",
  ],
  [
    "Do you treat emergencies after hours?",
    "Yes, our 24/7 emergency line connects you directly with on-call veterinary staff.",
  ],
  [
    "What payment methods do you accept?",
    "We accept all major credit cards, debit, and offer flexible payment plans for larger treatments.",
  ],
  [
    "Do you treat pets other than cats and dogs?",
    "Our primary focus is cats and dogs, though we can advise on referrals for exotic pet care.",
  ],
  [
    "How do I get my pet's medical records?",
    "Simply call or email our front desk, and we'll send records to you or a new provider directly.",
  ],
];

export const visitReasonOptions = [
  {
    label: "Reason for Visit - Wellness Exam",
    value: "wellness",
  },
  {
    label: "Vaccination",
    value: "vaccination",
  },
  {
    label: "Illness / Injury",
    value: "illness-injury",
  },
  {
    label: "Surgery Consult",
    value: "surgery-consult",
  },
  {
    label: "Other",
    value: "other",
  },
];
