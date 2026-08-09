import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Plus,
  Star,
} from "lucide-react";
import styles from "./Hero.module.css";

type HeroProps = {
  introReady?: boolean;
};

const heroAssets = {
  avatar: "/assets/hero/customer-avatar.png",
  cat: "/assets/hero/cat.png",
  catHouse: "/assets/hero/cat-house.png",
  dachshund: "/assets/hero/dachshund.png",
  goldenRetriever: "/assets/hero/golden-retriever.png",
  productReview: "/assets/hero/product-review.png",
} as const;

function ExploreButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={`${styles.exploreButton}${compact ? ` ${styles.compactButton}` : ""}`}
      href="#contact"
    >
      Book Appointment
      <span aria-hidden="true">
        <ArrowRight />
      </span>
    </a>
  );
}

function ProductCard() {
  return (
    <article className={styles.productCard}>
      <div className={styles.productImage}>
        <Image
          alt="Orange cat house"
          fill
          priority
          sizes="(max-width: 767px) 42vw, (max-width: 1023px) 160px, 14vw"
          src={heroAssets.catHouse}
        />
        <a aria-label="Explore fear-free veterinary care" href="#services">
          <ArrowUpRight />
        </a>
      </div>
      <p>Fear-Free Approach</p>
      <strong>Low-Stress Visits</strong>
    </article>
  );
}

function ReviewCard() {
  return (
    <article className={styles.reviewCard}>
      <Image
        alt="A dog owner opening a pet product box"
        fill
        priority
        sizes="(max-width: 767px) 42vw, (max-width: 1023px) 120px, 10vw"
        src={heroAssets.productReview}
      />
      <div className={styles.reviewCardContent}>
        <button aria-label="Meet our veterinary team" type="button">
          <Play fill="currentColor" />
        </button>
        <p>
          Meet Our Certified & Licensed Veterinary Team
        </p>
      </div>
    </article>
  );
}

function CustomerStat() {
  return (
    <div className={styles.customerStat}>
      <div className={styles.statLine}>
        <strong>10K+</strong>
        <span className={styles.avatarStack}>
          <Image
            alt="Happy pet owner"
            height={30}
            src={heroAssets.avatar}
            width={30}
          />
          <span aria-hidden="true">
            <Plus />
          </span>
        </span>
      </div>
      <p>Happy Pets Treated with Compassion</p>
    </div>
  );
}

function RatingStat() {
  return (
    <div className={styles.ratingStat}>
      <div className={styles.statLine}>
        <strong>98%</strong>
        <Star aria-hidden="true" fill="currentColor" />
      </div>
      <p>Client Satisfaction Rate</p>
    </div>
  );
}

function PetPanels() {
  return (
    <div className={styles.petPanels}>
      <div className={`${styles.petPanel} ${styles.leftPanel}`}>
        <Image
          alt="Dachshund peeking over a green panel"
          height={762}
          priority
          sizes="33vw"
          src={heroAssets.dachshund}
          width={870}
        />
        <div className={styles.panelOverlay}>
          <CustomerStat />
        </div>
      </div>

      <div className={`${styles.petPanel} ${styles.centerPanel}`}>
        <Image
          alt="Golden retriever leaning over a green panel"
          height={1024}
          priority
          sizes="40vw"
          src={heroAssets.goldenRetriever}
          width={976}
        />
        <div className={`${styles.panelOverlay} ${styles.centerOverlay}`}>
          <h2>Complete Care<br />for Cats &amp; Dogs</h2>
          <ExploreButton compact />
        </div>
      </div>

      <div className={`${styles.petPanel} ${styles.rightPanel}`}>
        <Image
          alt="Orange cat peeking over a green panel"
          height={816}
          priority
          sizes="33vw"
          src={heroAssets.cat}
          width={870}
        />
        <div className={styles.panelOverlay}>
          <RatingStat />
        </div>
      </div>
    </div>
  );
}

export function Hero({ introReady = true }: HeroProps) {
  return (
    <section
      className={`${styles.hero}${introReady ? ` ${styles.ready}` : ""}`}
      id="home"
    >
      <div className={styles.desktopLayout}>
        <div className={styles.heading}>
          <h1>
            <span>Compassionate Care</span>
            <span>For Cats &amp; Dogs</span>
          </h1>
        </div>

        <div className={styles.desktopProduct}>
          <ProductCard />
        </div>
        <div className={styles.desktopReview}>
          <ReviewCard />
        </div>

        <PetPanels />
      </div>

      <div className={styles.mobileLayout}>
        <div className={styles.mobileIntro}>
          <h1>
            <span>Compassionate Care</span>
            <span>For Cats &amp; Dogs</span>
          </h1>
          <p>Expert veterinary support at every stage of your pet&apos;s life.</p>
          <ExploreButton />
        </div>

        <div className={styles.mobileCards}>
          <ProductCard />
          <ReviewCard />
        </div>

        <div className={styles.mobileStats}>
          <CustomerStat />
          <span aria-hidden="true" className={styles.statDivider} />
          <RatingStat />
        </div>

        <PetPanels />
      </div>
    </section>
  );
}
