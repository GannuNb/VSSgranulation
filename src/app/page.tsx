import styles from "./Home.module.css";
import Link from "next/link";
import HomeProducts from "../components/HomeProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>

          <h1 className={styles.heroTitle}>
            VSS Granulation
          </h1>

          <p className={styles.heroText}>
            Leading manufacturer of high-quality granulated materials,
            delivering reliable solutions for industrial applications.
          </p>

          <button className={styles.heroBtn}>
            Explore Products
          </button>

        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className={styles.aboutSection}>

        <div className={styles.aboutContainer}>

          <div className={styles.aboutImage}>
            <img src="/images/crumb_rubber_a1.png" alt="About VSS Granulation"/>
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
      <ContactCTA />


    </main>
  );
}