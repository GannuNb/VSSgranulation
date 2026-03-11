import styles from "./Home.module.css";
import Link from "next/link";
import HomeProducts from "../components/HomeProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactCTA from "../components/ContactCTA";
import IndustriesWeServe from "../components/IndustriesWeServe";

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
      <IndustriesWeServe />
      <ContactCTA />


    </main>
  );
}