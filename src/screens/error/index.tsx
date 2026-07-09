"use client";

import { Button, Icon, PawMark, Reveal } from "@/components/atoms";
import { Footer, Header } from "@/components/organisms";
import { motion } from "motion/react";
import Image from "next/image";
import "./styles.css";

type ErrorScreenProps = {
  code?: string | number;
  image?: string;
  title?: string;
  message?: string;
  reset?: () => void;
};

const defaultMessages: Record<string, { title: string; message: string }> = {
  "400": {
    title: "Something in the request looks off",
    message:
      "The page could not understand that request. Please check the address or head back home.",
  },
  "404": {
    title: "We could not find that page",
    message: "The page may have moved, or the link may no longer be available.",
  },
  "500": {
    title: "Something went wrong",
    message:
      "We ran into an unexpected problem. You can try again or return to the home page.",
  },
};

export function ErrorScreen({
  code = 500,
  image,
  title,
  message,
  reset,
}: ErrorScreenProps) {
  const normalizedCode = String(code);
  const fallback = defaultMessages[normalizedCode] ?? defaultMessages["500"];
  const errorImage = image ?? "/api/media/error";
  return (
    <div className="hp-page hp-error-page">
      <Header />
      <main className="hp-error-main">
        <section className="hp-error-panel" aria-labelledby="error-title">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            aria-hidden="true"
            className="hp-error-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {errorImage ? (
              <Image
                alt=""
                className="hp-error-image"
                fill
                sizes="(max-width: 820px) 320px, 40vw"
                src={errorImage}
              />
            ) : null}
            <PawMark className="hp-error-paw hp-error-paw-large" />
            <PawMark className="hp-error-paw hp-error-paw-small" />
            {!errorImage && (
              <span className={errorImage ? "has-image-text" : ""}>
                {normalizedCode}
              </span>
            )}
          </motion.div>
          <Reveal className="hp-error-copy" delay={0.08}>
            <span className="hp-error-kicker">Happy Paws Clinic</span>
            <h1 id="error-title">{title ?? fallback.title}</h1>
            <p>{message ?? fallback.message}</p>
            <div className="hp-error-actions">
              <Button href="/" variant="primary">
                <Icon name="home" />
                Back Home
              </Button>
              {reset ? (
                <Button type="button" variant="outline" onClick={reset}>
                  Try Again
                  <Icon name="refresh" />
                </Button>
              ) : (
                <Button href="/#contact" variant="outline">
                  Contact Us
                  <Icon name="arrow_forward" />
                </Button>
              )}
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
