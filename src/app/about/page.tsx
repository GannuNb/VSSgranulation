import styles from "../../styles/About.module.css";

export default function About() {
  return (
    <main className={styles.aboutPage}>

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About VSSI Granulation</h1>
          <p>
            VSSI Granulation is a recycling company that converts waste tyres into valuable 
            industrial materials using advanced technologies, 
            supporting sustainable manufacturing and environmental protection.
          </p>
        </div>
      </section>


      {/* WHO WE ARE */}
<section className={styles.intro}>
  <div className={styles.container}>

    <div className={styles.introGrid}>

      {/* TEXT */}

      <div className={styles.introText}>
        <h2>Who We Are</h2>

        <p>
          At VSSI Granulation, we specialize in tyre recycling and rubber
          granulation processes that help industries reuse materials
          efficiently. Our company focuses on converting discarded tyres
          into high-quality crumb rubber, EPDM granules, and tyre wire
          used across various industrial sectors.
        </p>

        <p>
          By combining modern machinery with environmentally responsible
          practices, we ensure that every stage of our recycling process
          minimizes waste while maximizing product quality.
        </p>
      </div>


      {/* IMAGE */}

      <div className={styles.introImage}>
        <img
          src="/images/tyre-recycling.png"
          alt="Tyre Recycling Process"
        />
      </div>

    </div>

  </div>
</section>


      {/* MISSION VISION */}

      <section className={styles.missionVision}>
        <div className={styles.containerGrid}>

          <div className={styles.card}>
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide high-quality recycled rubber
              products while promoting environmental sustainability
              and responsible waste management practices.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Our Vision</h3>
            <p>
              Our vision is to become a trusted global supplier of
              recycled rubber materials and contribute to a cleaner,
              greener planet through innovative recycling solutions.
            </p>
          </div>

        </div>
      </section>


      {/* EXPERTISE */}

      <section className={styles.expertise}>
        <div className={styles.container}>

          <h2>Our Expertise</h2>

          <p>
            Using advanced granulation systems, we convert used tyres into
            high-quality crumb rubber, EPDM granules and reusable tyre wire
            suitable for industrial applications including rubber flooring,
            sports surfaces, road construction, and manufacturing.
          </p>

        </div>
      </section>


      {/* PROCESS */}

      <section className={styles.process}>

        <h2 className={styles.processTitle}>Our Recycling Process</h2>

        <div className={styles.cardWrapper}>

          <div className={styles.appCard}>
            <h3>Tyre Collection</h3>
            <p>
              Scrap tyres are collected from industries,
              transportation sectors and recycling partners.
            </p>
          </div>

          <div className={`${styles.appCard} ${styles.middleCard}`}>
            <h3>Primary Shredding</h3>
            <p>
              Heavy-duty shredders break tyres into
              smaller pieces preparing them for processing.
            </p>
          </div>

          <div className={styles.appCard}>
            <h3>Granulation</h3>
            <p>
              Advanced granulators convert rubber into
              uniform crumb granules used across industries.
            </p>
          </div>

          <div className={styles.appCard}>
            <h3>Separation</h3>
            <p>
              Steel wires and fibers are separated to
              produce clean and high-quality rubber material.
            </p>
          </div>

        </div>

      </section>


      {/* STATS */}

      <section className={styles.stats}>
        <div className={styles.statsGrid}>

          <div className={styles.statCard}>
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div className={styles.statCard}>
            <h3>5000+</h3>
            <p>Tons Recycled</p>
          </div>

          <div className={styles.statCard}>
            <h3>200+</h3>
            <p>Industry Clients</p>
          </div>

          <div className={styles.statCard}>
            <h3>3</h3>
            <p>Major Products</p>
          </div>

        </div>
      </section>


      {/* WHY CHOOSE */}

      <section className={styles.whyChoose}>
        <div className={styles.container}>

          <h2>Why Choose VSSI Granulation</h2>

          <div className={styles.whyGrid}>

            <div className={styles.whyCard}>
              <h4>Advanced Technology</h4>
              <p>Modern machinery ensures efficient production and consistent quality.</p>
            </div>

            <div className={styles.whyCard}>
              <h4>Sustainable Process</h4>
              <p>Our recycling methods reduce landfill waste and support eco-friendly industries.</p>
            </div>

            <div className={styles.whyCard}>
              <h4>Quality Products</h4>
              <p>High-grade crumb rubber and EPDM granules trusted by industries.</p>
            </div>

            <div className={styles.whyCard}>
              <h4>Trusted Partner</h4>
              <p>Reliable supply chain and strong industry partnerships.</p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}