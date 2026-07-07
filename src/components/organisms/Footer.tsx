import { PawMark, SocialIcon, Button } from "../atoms";
import { FooterLinks } from "../molecules";
import { FloatingPaws } from "../molecules/FloatingPaws";

export function Footer() {
  return (
    <footer className="hp-footer">
      <FloatingPaws variant="footer" />
      <div className="hp-container hp-footer-grid">
        <div>
          <a className="hp-brand hp-footer-brand" href="#home">
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
            ["Home", "#home"],
            ["About Us", "#about"],
            ["Services", "#services"],
            ["Our Vets", "#team"],
            ["Testimonials", "#testimonials"],
            ["Contact", "#contact"],
          ]}
        />
        <FooterLinks
          title="Services"
          links={[
            ["Wellness & Vaccinations", "#services"],
            ["Surgery", "#services"],
            ["Emergency Care", "#services"],
            ["Grooming", "#services"],
            ["Boarding", "#services"],
            ["Senior Pet Care", "#services"],
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
