import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Paws | Compassionate Veterinary Care",
  description:
    "Professional and warm veterinary care for your beloved pets. Book your appointment today with our certified vets.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md selection:bg-secondary-container/30">
        {children}
      </body>
    </html>
  );
}
