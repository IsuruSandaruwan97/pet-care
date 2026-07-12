import {
  Section,
  RevealCard,
  Card,
  Button,
  Dropdown,
  DateTimePicker,
} from "@/components/atoms";
import { visitReasonOptions } from "@/data";
import { classNames } from "@/utils";
import { useState } from "react";

const mapEmbedUrl: string | null = process.env.NEXT_PUBLIC_MAP_URL || null;

export function Contact() {
  const [pet, setPet] = useState<"dog" | "cat">("dog");
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section className="hp-section hp-contact" id="contact">
      <div className="hp-container hp-contact-grid">
        <RevealCard className="hp-contact-form-card">
          <h2>Ready to Book Your Pet&apos;s Visit?</h2>
          <p>
            Fill out the form below or give us a call - our front desk team will
            confirm your appointment within one business day.
          </p>
          {submitted ? (
            <Card className="hp-contact-success" unstyled>
              <div aria-hidden="true">&#128062;</div>
              <strong>Request received!</strong>
              <p>Our team will reach out within one business day to confirm.</p>
            </Card>
          ) : (
            <form
              className="hp-form"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <input name="ownerName" placeholder="Pet Owner Name" required />
              <input name="phone" type="tel" placeholder="Phone Number" required />
              <input name="email" type="email" placeholder="Email Address" required />
              <input name="petName" placeholder="Pet Name" required />
              <div>
                <div className="hp-pet-label">Pet Type</div>
                <div className="hp-pet-toggle">
                  <Button
                    className={classNames(pet === "dog" && "hp-selected")}
                    onClick={() => setPet("dog")}
                    type="button"
                    variant="unstyled"
                  >
                    &#128054; Dog
                  </Button>
                  <Button
                    className={classNames(pet === "cat" && "hp-selected")}
                    onClick={() => setPet("cat")}
                    type="button"
                    variant="unstyled"
                  >
                    &#128049; Cat
                  </Button>
                </div>
              </div>
              <Dropdown name="reason" options={visitReasonOptions} />
              <DateTimePicker name="appointmentAt" />
              <textarea placeholder="Additional Notes" rows={3} />
              <Button
                className="hp-contact-submit"
                type="submit"
                variant="unstyled"
              >
                Request Appointment
              </Button>
            </form>
          )}
        </RevealCard>
        <RevealCard className="hp-contact-info" delay={0.12}>
          <Card className="hp-map" unstyled>
            <div />
            {mapEmbedUrl ? (
              <div className="map-container">
                <iframe
                src={mapEmbedUrl}
                frameBorder="0"
                referrerPolicy="no-referrer"
                sandbox="allow-scripts allow-same-origin"
              />
              </div>
            ) : (
              <span>[ GOOGLE MAP EMBED ]</span>
            )}
          </Card>
          <Card className="hp-contact-details" unstyled>
            <div>&#128205; 123 Main Street, Your City, ST 00000</div>
            <div>&#128222; (555) 123-4567</div>
            <div>&#9993;&#65039; hello@happypawsvet.com</div>
            <div>
              &#128336; Mon-Fri: 8 AM-7 PM &nbsp;|&nbsp; Sat: 9 AM-4 PM
              &nbsp;|&nbsp; Sun: Closed
            </div>
            <div>&#128680; 24/7 Emergency Line: (555) 999-0000</div>
          </Card>
        </RevealCard>
      </div>
    </Section>
  );
}
