import styles from "../styles/Industries.module.css";

export default function IndustriesWeServe() {
  return (
    <section className={styles.industriesSection}>
      <div className={styles.container}>

        <h2 className={styles.title}>Industries We Serve</h2>
        <p className={styles.subtitle}>
          Our granulated rubber products are widely used across multiple
          industries for sustainable and durable applications.
        </p>

        <div className={styles.grid}>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="/images/road-construction.webp" alt="Road Construction"/>
            </div>
            <h3>Road Construction</h3>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="/images/epdm1.jpeg" alt="Sports Flooring"/>
            </div>
            <h3>Sports Flooring</h3>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="/images/epdm2.jpg" alt="Playgrounds"/>
            </div>
            <h3>Playgrounds</h3>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="/images/epdmg1.jpg" alt="Rubber Manufacturing"/>
            </div>
            <h3>Rubber Manufacturing</h3>
          </div>

        </div>

      </div>
    </section>
  );
}