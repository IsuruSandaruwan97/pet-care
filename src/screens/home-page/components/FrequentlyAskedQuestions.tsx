import { Section, Reveal, Stagger, Card, Button } from "@/components/atoms";
import { itemVariants } from "@/constants";
import { faqs } from "@/data";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function FrequentlyAskedQuestions() {
  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <Section className="hp-section hp-faq-section">
      <div className="hp-container hp-faq-container">
        <Reveal className="hp-reference-title">
          <h2>Frequently Asked Questions</h2>
        </Reveal>
        <Stagger className="hp-faq-list">
          {faqs.map(([question, answer], index) => (
            <Card
              as={motion.div}
              className="hp-faq-item"
              key={question}
              unstyled
              variants={itemVariants}
            >
              <Button
                variant="unstyled"
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <span>{question}</span>
                <motion.span
                  animate={{ rotate: openFaq === index ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  +
                </motion.span>
              </Button>
              <AnimatePresence initial={false}>
                {openFaq === index ? (
                  <motion.div
                    className="hp-faq-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p>{answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </Card>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
