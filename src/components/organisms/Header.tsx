"use client";

import { navLinks } from "@/constants";
import { useScrolled } from "@/hooks";
import { classNames, resolveHref } from "@/utils";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PawMark, Button } from "@/components/atoms";

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const contactHref = resolveHref("contact", pathname);

  return (
    <header className="hp-header">
      <div className="hp-topbar">
        <span>
          <span aria-hidden="true">{"\u{1F4DE}"}</span> (555) 123-4567
        </span>
        <span>
          <span aria-hidden="true">{"\u{1F550}"}</span> Mon-Sat: 8 AM-7 PM
        </span>
        <strong className="animate-pulse">
          <span aria-hidden="true">{"\u{1F6A8}"}</span> 24/7 Emergency Line
        </strong>
      </div>
      <nav className={classNames("hp-nav", scrolled && "hp-nav-scrolled")}>
        <a className="hp-brand" href="/" onClick={() => setOpen(false)}>
          <PawMark className="hp-brand-mark" />
          <span>Happy Paws</span>
        </a>
        <div className="hp-navlinks">
          {navLinks.map(([label, slug]) => (
            <a href={resolveHref(slug, pathname)} key={label}>
              {label}
            </a>
          ))}
        </div>
        <a className="hp-cta hp-nav-cta" href={contactHref}>
          Book an Appointment
        </a>
        <Button
          className="hp-burger"
          variant="unstyled"
          aria-label="Menu"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </Button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="hp-mobile"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hp-mobile-head">
              <span>Happy Paws</span>
              <Button
                variant="unstyled"
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                x
              </Button>
            </div>
            {navLinks.map(([label, slug]) => (
              <a
                href={resolveHref(slug, pathname)}
                key={label}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              className="hp-cta"
              href={contactHref}
              onClick={() => setOpen(false)}
            >
              Book an Appointment
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
