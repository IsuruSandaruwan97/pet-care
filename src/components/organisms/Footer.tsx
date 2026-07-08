"use client";

import { usePathname } from "next/navigation";
import { PawMark, SocialIcon, Button } from "@/components/atoms";
import { FloatingPaws, FooterLinks } from "@/components/molecules";
import { resolveHref } from "@/utils";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="hp-footer">
      <FloatingPaws variant="footer" />
      <div className="hp-container hp-footer-grid">
        <div>
          <a className="hp-brand hp-footer-brand" href="/">
            <PawMark className="hp-brand-mark" /> <span>Happy Paws</span>
          </a>
          <p>
            Compassionate care for your cats and dogs, every step of the way.
          </p>
          <div className="hp-footer-socials">
            <a href="#" aria-label="Facebook">
              <SocialIcon name="facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <SocialIcon name="instagram" />
            </a>
            <a href="#" aria-label="TikTok">
              <span aria-hidden="true">&#9834;</span>
            </a>
          </div>
        </div>
        <FooterLinks
          title="Quick Links"
          links={[
            ["Home", "/"],
            [
              "About Us",
              resolveHref({ section: "about", page: "about-us" }, pathname),
            ],
            [
              "Services",
              resolveHref({ section: "services", page: "services" }, pathname),
            ],
            [
              "Our Vets",
              resolveHref({ section: "team", page: "our-vets" }, pathname),
            ],
            [
              "Pet Care Tips",
              resolveHref({ section: "tips", page: "pet-care" }, pathname),
            ],
            ["Testimonials", resolveHref({ section: "testimonials" }, pathname)],
            ["Contact", resolveHref({ section: "contact" }, pathname)],
          ]}
        />
        <FooterLinks
          title="Services"
          links={[
            [
              "Wellness & Vaccinations",
              pathname === "/services" ? "#wellness" : "/services#wellness",
            ],
            [
              "Surgery",
              pathname === "/services" ? "#surgery" : "/services#surgery",
            ],
            [
              "Emergency Care",
              pathname === "/services" ? "#emergency" : "/services#emergency",
            ],
            [
              "Grooming",
              pathname === "/services" ? "#grooming" : "/services#grooming",
            ],
            [
              "Boarding",
              pathname === "/services" ? "#boarding" : "/services#boarding",
            ],
            [
              "Senior Pet Care",
              pathname === "/services"
                ? "#senior-care"
                : "/services#senior-care",
            ],
          ]}
        />
        <div>
          <h3>Newsletter</h3>
          <p>Get pet care tips straight to your inbox.</p>
          <div className="hp-newsletter">
            <input placeholder="Email" type="email" />
            <Button type="button" variant="unstyled">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="hp-container hp-footer-bottom">
        <span>
          &copy; 2026 Happy Paws Veterinary &amp; Pet Care. All rights reserved.
        </span>
        <span>Privacy Policy &middot; Terms of Service &middot; Sitemap</span>
      </div>
    </footer>
  );
}
