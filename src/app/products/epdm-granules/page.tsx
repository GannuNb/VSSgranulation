import styles from "../../../styles/Productpage.module.css";
import Link from "next/link";
import Image from "next/image";

export default function EPDMGranules() {
  return (
    <div className={styles.productPage}>

      {/* HERO */}
      <section className={styles.hero}>
        <span className={styles.heroCircle1}></span>
        <span className={styles.heroCircle2}></span>
        <div className={styles.heroContent}>
          <h1>EPDM Colored Rubber Granules</h1>
          <p>
            EPDM colored rubber granules are premium synthetic rubber
            particles widely used for sports surfaces, playground
            flooring, and recreational areas. Known for their vibrant
            colors, durability, and excellent weather resistance,
            EPDM granules provide safe and visually appealing
            flooring solutions.
          </p>

          <div className={styles.heroBtns}>
            <a href="/contact" className={styles.heroBtnPrimary}>
              Enquire Now
            </a>

            <a href="#applications" className={styles.heroBtnSecondary}>
              View Applications
            </a>
          </div>
        </div>

      </section>

      {/* PRODUCT OVERVIEW */}
      <section className={styles.productSection}>

        <div className={styles.imageBox}>
          <Image
            src="/images/topimg.webp"
            alt="EPDM Granules"
            width={600}
            height={420}
            className={styles.productImage}
            priority
          />
        </div>

        <div className={styles.contentBox}>
          <h2>EPDM Colored Rubber Granules</h2>

          <p>
            EPDM (Ethylene Propylene Diene Monomer) rubber granules are
            widely used in sports and playground flooring systems due
            to their exceptional durability and weather resistance.
            These granules are specially engineered to maintain their
            color, elasticity, and performance even under harsh
            environmental conditions.
          </p>

          <p>
            EPDM granules are commonly installed as part of synthetic
            sports surfaces and safety flooring systems where shock
            absorption and slip resistance are essential.
          </p>

          <p>
            Their flexible structure provides a comfortable and safe
            walking or running surface while enhancing the appearance
            of sports infrastructure and recreational spaces.
          </p>

          <ul className={styles.features}>
            <li>✔ High durability and resilience</li>
            <li>✔ Excellent UV and weather resistance</li>
            <li>✔ Vibrant and long-lasting colors</li>
            <li>✔ Shock-absorbing and slip-resistant</li>
            <li>✔ Water permeable surface</li>
            <li>✔ Safe and environmentally friendly material</li>
          </ul>

          <Link href="/contact">
            <button className={styles.enquireBtn}>
              Enquire For Product
            </button>
          </Link>
        </div>

      </section>

      {/* MANUFACTURING PROCESS */}
      <section className={styles.infoSection}>

        <div className={styles.infoContainer}>

          <h2>Manufacturing Process</h2>

          <p>
            EPDM rubber granules are produced using high-quality
            synthetic rubber materials combined with specialized
            pigments and additives that provide vibrant color and
            long-term durability.
          </p>

          <p>
            The raw EPDM compound is first processed and molded into
            sheets or blocks which are then granulated into uniform
            rubber particles. These granules are carefully screened
            and sorted to achieve consistent size distribution.
          </p>

          <p>
            Advanced color mixing technology ensures uniform color
            dispersion throughout the granules, allowing them to
            maintain their visual appearance even after years of
            outdoor exposure.
          </p>

          <h3>Production Equipment</h3>

          <ul className={styles.features}>
            <li>Rubber Mixing Units</li>
            <li>Extrusion Systems</li>
            <li>Granulating Machines</li>
            <li>Screening and Sorting Units</li>
            <li>Color Mixing Systems</li>
          </ul>

        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Benefits of EPDM Rubber Granules</h2>
          <p>
            EPDM rubber granules provide several advantages in sports
            and recreational infrastructure. Their superior durability
            and flexibility make them one of the most preferred
            materials for outdoor safety flooring and athletic
            surfaces.
          </p>

          <ul className={styles.features}>
            <li>Provides excellent shock absorption for safety</li>
            <li>Maintains color stability under UV exposure</li>
            <li>Highly resistant to weather and temperature changes</li>
            <li>Ensures long service life with minimal maintenance</li>
            <li>Improves surface grip and slip resistance</li>
            <li>Eco-friendly and safe for children’s playgrounds</li>
          </ul>

        </div>
      </section>

      {/* APPLICATIONS */}
      <section id="applications" className={styles.applications}>
        <h2 className={styles.appTitle}>Applications</h2>
        <div className={styles.cardWrapper}>
          <div className={styles.appCard}>
            <div className={styles.cardImageWrap}>
              <Image
                src="/images/epdm1.jpeg"
                alt="Playground Flooring"
                width={400}
                height={220}
              />
            </div>
            <h3>Playground Flooring</h3>
            <p>
              EPDM granules are widely used in children's playgrounds
              as safety flooring material due to their cushioning and
              shock-absorbing properties.
            </p>
          </div>
          <div className={`${styles.appCard} ${styles.middleCard}`}>
            <div className={styles.cardImageWrap}>
              <Image
                src="/images/epdm2.jpg"
                alt="Athletic Tracks"
                width={400}
                height={220}
              />
            </div>
            <h3>Athletic Tracks</h3>
            <p>
              EPDM granules are used in professional running tracks
              and sports surfaces because of their durability,
              elasticity, and traction.
            </p>
          </div>
          <div className={styles.appCard}>
            <div className={styles.cardImageWrap}>
              <Image
                src="/images/epdm3.jpg"
                alt="Multipurpose Courts"
                width={400}
                height={220}
              />
            </div>
            <h3>Multipurpose Courts</h3>
            <p>
              Ideal for school grounds, parks, and multipurpose sports
              courts where a durable and weather-resistant flooring
              system is required.
            </p>
          </div>
        </div>
      </section>

      {/* COLOR OPTIONS */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Color Options and Customization</h2>
          <p>
            EPDM rubber granules are available in a wide range of
            vibrant colors that can be customized to meet specific
            project requirements. These color options allow designers
            and architects to create visually appealing sports and
            recreational surfaces.
          </p>

          <p>
            Multiple colors can be combined to create patterns,
            designs, or themed playground areas, enhancing both
            safety and aesthetic appeal.
          </p>

          <ul className={styles.features}>
            <li>Standard Red, Green, Blue, and Yellow colors</li>
            <li>Custom color blends available</li>
            <li>UV stable pigments for long-lasting color</li>
            <li>Suitable for creative playground designs</li>
          </ul>
        </div>
      </section>

      {/* QUALITY STANDARDS */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>

          <h2>Quality and Safety Standards</h2>

          <p>
            EPDM rubber granules are manufactured under strict quality
            control procedures to ensure consistent performance,
            durability, and safety for users.
          </p>

          <p>
            The granules are tested for color stability, elasticity,
            weather resistance, and shock absorption to ensure they
            meet the requirements of modern sports infrastructure.
          </p>

          <p>
            Our EPDM products are designed to comply with safety
            standards for playgrounds, sports tracks, and recreational
            flooring installations.
          </p>
        </div>
      </section>
    </div>
  );
}