"use client";

import { navLinks } from "@/constants";
import { useScrolled } from "@/hooks";
import { classNames, resolveHref } from "@/utils";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PawMark, Button } from "@/components/atoms";
import { siteConfig } from "@/config/site";

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const forceStaticNav = pathname !== "/";
  const [open, setOpen] = useState(false);
  const contactHref = resolveHref({ section: "contact" }, pathname);

  return (
    <header className="hp-header">
      <div className="hp-topbar">
        <span>
          <span aria-hidden="true">{"\u{1F4DE}"}</span> {siteConfig.contact.phone}
        </span>
        <span>
          <span aria-hidden="true">{"\u{1F550}"}</span> {siteConfig.hours.short}
        </span>
        <strong className="animate-pulse">
          <span aria-hidden="true">{"\u{1F6A8}"}</span> 24/7 Emergency Line
        </strong>
      </div>
      <nav
        className={classNames(
          "hp-nav",
          (scrolled || forceStaticNav) && "hp-nav-scrolled",
        )}
      >
        <a className="hp-brand" href="/" onClick={() => setOpen(false)}>
          <PawMark className="hp-brand-mark" />
          <span>{siteConfig.name}</span>
        </a>
        <div className="hp-navlinks">
          {navLinks.map((link) => (
            <a href={resolveHref(link, pathname)} key={link.label}>
              {link.label}
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
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hp-mobile-head">
              <span>{siteConfig.name}</span>
              <Button
                variant="unstyled"
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                x
              </Button>
            </div>
            {navLinks.map((link) => (
              <a
                href={resolveHref(link, pathname)}
                key={link.label}
                onClick={() => setOpen(false)}
              >
                {link.label}
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
