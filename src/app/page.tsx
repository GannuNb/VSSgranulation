import styles from "./Home.module.css";
import Link from "next/link";
import HomeProducts from "../components/HomeProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactCTA from "../components/ContactCTA";
import IndustriesWeServe from "../components/IndustriesWeServe";
import type { Metadata } from "next";
import Image from "next/image";


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
            VSS Granulation
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

        <div className={styles.aboutContainer}>

          <div className={styles.aboutImage}>
            <Image
              src="/images/crumb_rubber_a1.png"
              alt="About VSS Granulation"
              width={600}
              height={400}
            />
          </div>

          <div className={styles.aboutContent}>

            <h2 className={styles.aboutTitle}>
              About VSS Granulation
            </h2>

            <p className={styles.aboutText}>
              VSS Granulation is committed to delivering high-quality granulated
              materials designed for industrial applications. Our focus is on
              reliability, innovation, and sustainable production processes.
            </p>

            <p className={styles.aboutText}>
              With advanced manufacturing techniques and a strong commitment
              to quality, we ensure consistent products that meet industry
              standards and client expectations.
            </p>

            <div className={styles.buttonWrapper}>
              <Link href="/about" className={styles.readMoreBtn}>
                Read More →
              </Link>
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