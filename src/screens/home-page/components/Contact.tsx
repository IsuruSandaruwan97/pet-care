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
              <input placeholder="Pet Owner Name" />
              <input placeholder="Phone Number" />
              <input placeholder="Email Address" />
              <input placeholder="Pet Name" />
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
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;maptype=roadmap&amp;zoom=14"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
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
