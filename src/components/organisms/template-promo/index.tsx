"use client";

import { Icon, PawMark } from "@/components/atoms";
import { siteConfig } from "@/config/site";
import { whenIntroReady } from "@/utils/intro-ready";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import "./styles.css";

const ALERT_SEEN_KEY = "happy-paws-template-promo-alert-seen";
const BANNER_DISMISSED_KEY = "happy-paws-template-promo-banner-dismissed";
const SCROLL_THRESHOLD = 120;
const ALERT_DELAY_MS = 2000;

const highlights = [
  {
    icon: "laptop_mac",
    label: "Next.js source code",
  },
  {
    icon: "verified",
    label: "Ready to customize",
  },
  {
    icon: "auto_awesome",
    label: "Premium pet care design",
  },
] as const;

const isPageReload = () => {
  const navigationEntry = performance.getEntriesByType(
    "navigation",
  )[0] as PerformanceNavigationTiming | undefined;

  return navigationEntry?.type === "reload";
};

export function TemplatePromo() {
  const pathname = usePathname();
  const [showAlert, setShowAlert] = useState(false);
  const [bannerEnabled, setBannerEnabled] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    if (isPageReload()) {
      setBannerEnabled(true);
      return;
    }

    if (window.sessionStorage.getItem(ALERT_SEEN_KEY) === "true") {
      setBannerEnabled(true);
      return;
    }

    let alertTimer: number | undefined;

    const scheduleAlert = () => {
      window.clearTimeout(alertTimer);
      alertTimer = window.setTimeout(() => {
        setShowAlert(true);
      }, ALERT_DELAY_MS);
    };

    const unsubscribeIntroReady =
      pathname === "/" ? whenIntroReady(scheduleAlert) : undefined;

    if (pathname !== "/") {
      scheduleAlert();
    }

    return () => {
      unsubscribeIntroReady?.();
      window.clearTimeout(alertTimer);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("hp-template-promo-open", showAlert);

    return () => {
      document.body.classList.remove("hp-template-promo-open");
    };
  }, [showAlert]);

  useEffect(() => {
    if (!bannerEnabled) {
      return;
    }

    if (window.sessionStorage.getItem(BANNER_DISMISSED_KEY) === "true") {
      return;
    }

    const handleScroll = () => {
      setShowBanner(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bannerEnabled]);

  const dismissAlert = useCallback(() => {
    window.sessionStorage.setItem(ALERT_SEEN_KEY, "true");
    setShowAlert(false);
    setBannerEnabled(true);
  }, []);

  const dismissBanner = useCallback(() => {
    window.sessionStorage.setItem(BANNER_DISMISSED_KEY, "true");
    setShowBanner(false);
  }, []);

  const purchaseUrl = siteConfig.template.purchaseUrl;

  return (
    <>
      {showAlert ? (
        <div
          aria-labelledby="template-promo-title"
          aria-modal="true"
          className="hp-template-promo-backdrop"
          role="dialog"
        >
          <div className="hp-template-promo-dialog">
            <button
              aria-label="Close template purchase dialog"
              className="hp-template-promo-close"
              onClick={dismissAlert}
              type="button"
            >
              <Icon name="close" />
            </button>

            <div className="hp-template-promo-header">
              <div className="hp-template-promo-badge">
                <PawMark className="hp-template-promo-badge-mark" />
                <Sparkles aria-hidden="true" className="hp-template-promo-sparkle" />
              </div>
              <div>
                <span className="hp-template-promo-kicker">Template Preview</span>
                <h2 id="template-promo-title">
                  Next.js template available for purchase
                </h2>
              </div>
            </div>

            <p className="hp-template-promo-description">
              You are viewing a live demo of the {siteConfig.template.productName}.
              Buy the full source code, customize it for your clinic or client, and
              deploy it on your own domain.
            </p>

            <ul className="hp-template-promo-highlights">
              {highlights.map((item) => (
                <li key={item.label}>
                  <span className="hp-template-promo-highlight-icon">
                    <Icon name={item.icon} />
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>

            <div className="hp-template-promo-price">
              <span>One-time purchase</span>
              <strong>${siteConfig.template.price}</strong>
            </div>

            <div className="hp-template-promo-actions">
              <a href={purchaseUrl} rel="noopener noreferrer" target="_blank">
                <Icon name="savings" />
                Purchase on Gumroad
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.2} />
              </a>
              <button onClick={dismissAlert} type="button">
                Continue preview
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <aside
        aria-label="Template purchase banner"
        className={`hp-template-promo-banner${
          showBanner ? " hp-template-promo-banner-visible" : ""
        }`}
      >
        <div className="hp-template-promo-banner-inner">
          <div className="hp-template-promo-banner-copy">
            <strong>Next.js pet care &amp; veterinary website template</strong>
            <span>Live demo preview · Full source code available on Gumroad</span>
          </div>
          <div className="hp-template-promo-banner-actions">
            <a href={purchaseUrl} rel="noopener noreferrer" target="_blank">
              Buy template
            </a>
            <button
              aria-label="Dismiss purchase banner"
              onClick={dismissBanner}
              type="button"
            >
              ×
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
