import styles from "../styles/CompanyStats.module.css";

export default function CompanyStats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>

        <div className={styles.statBox}>
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>

        <div className={styles.statBox}>
          <h3>5000+</h3>
          <p>Tons Recycled</p>
        </div>

        <div className={styles.statBox}>
          <h3>200+</h3>
          <p>Happy Clients</p>
        </div>

        <div className={styles.statBox}>
          <h3>15+</h3>
          <p>Products Delivered</p>
        </div>

      </div>
    </section>
  );
}