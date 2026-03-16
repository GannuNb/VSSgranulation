import styles from "./Home.module.css";
import Link from "next/link";
import HomeProducts from "../components/HomeProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactCTA from "../components/ContactCTA";
import IndustriesWeServe from "../components/IndustriesWeServe";
import type { Metadata } from "next";
import Image from "next/image";
import CountUp from "react-countup";

export const metadata: Metadata = {
  title: "VSS Granulation | Tyre Recycling & Rubber Granules Manufacturer",
  description:
    "VSS Granulation is a leading tyre recycling company manufacturing high-quality crumb rubber, EPDM granules, and tyre wire for industrial applications.",
  keywords: [
    "VSS Granulation",
    "tyre recycling company",
    "crumb rubber manufacturer",
    "EPDM granules supplier",
    "rubber recycling India",
  ],

  openGraph: {
    title: "VSS Granulation",
    description:
      "Leading manufacturer of crumb rubber, EPDM granules and tyre wire from recycled tyres.",
    url: "https://vssgranulation.com",
    siteName: "VSS Granulation",

    images: [
      {
        url: "https://vssgranulation.com/images/crumb_rubber_a1.png",
        width: 1200,
        height: 630,
        alt: "VSS Granulation Crumb Rubber",
      },
    ],

    type: "website",
  },
};
export default function Home() {
  return (
    <main>

      <section className={styles.hero}>

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.heroVideo}
        >
          <source src="/images/Hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className={styles.overlay}></div>

        {/* Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            VSS GRANULATION
          </h1>

          <p className={styles.heroText}>
            Leading manufacturer of high-quality granulated materials,
            delivering reliable solutions for industrial applications.
          </p>

          <a href="#products" className={styles.heroBtn}>
            Explore Products
          </a>
        </div>

      </section>
      {/* ABOUT SECTION */}

      <section className={styles.aboutSection}>

        {/* Background Image */}
        <div className={styles.aboutImageWrapper}>
          <Image
            src="/images/crumb_rubber_a1.png"
            alt="VSS Granulation"
            fill
            className={styles.aboutImage}
          />
        </div>

        {/* Content Card */}
        <div className={styles.aboutCard}>

          <span className={styles.aboutTag}>
            About Company
          </span>

          <h2 className={styles.aboutTitle}>
            Sustainable TYRE RECYCLING Solutions
          </h2>

          <p className={styles.aboutText}>
            VSS Granulation transforms waste tyres into valuable materials
            like crumb rubber, EPDM granules, and tyre wire using advanced
            recycling technology.
          </p>

          <p className={styles.aboutText}>
            Our mission is to deliver reliable industrial materials while
            supporting sustainable manufacturing practices.
          </p>

          <Link href="/about" className={styles.readMoreBtn}>
            Learn More →
          </Link>

          {/* STATS */}
          <div className={styles.statsGrid}>

            <div className={styles.statCard}>
              <h3>10+</h3>
              <p>Countries Served</p>
            </div>

            <div className={styles.statCard}>
              <h3>5000+</h3>
              <p>Tons Recycled</p>
            </div>

            <div className={styles.statCard}>
              <h3>15+</h3>
              <p>Industrial Applications</p>
            </div>

          </div>

        </div>

      </section>

      <HomeProducts />

      <WhyChooseUs />
      <IndustriesWeServe />
      <ContactCTA />


    </main>
  );
}