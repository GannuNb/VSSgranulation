import styles from "../styles/ContactCTA.module.css";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <h2 className={styles.title}>
          Need High-Quality Rubber Materials?
        </h2>

        <p className={styles.text}>
          Contact our team today to discuss your requirements.  
          We provide reliable supply of crumb rubber, EPDM granules,
          and tyre wire for industrial applications.
        </p>

        <div className={styles.buttons}>

          <Link href="/contact" className={styles.primaryBtn}>
            Contact Us
          </Link>

          <a href="tel:+91 4049471616" className={styles.secondaryBtn}>
            Call Now
          </a>

        </div>

      </div>

    </section>
  );
}