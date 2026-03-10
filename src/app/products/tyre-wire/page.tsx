import styles from "../../../styles/Productpage.module.css";
import Link from "next/link";
import Image from "next/image";

export default function TyreWire() {
  return (
    <div className={styles.productPage}>

      {/* HERO */}
      <section className={styles.hero}>

        <span className={styles.heroCircle1}></span>
        <span className={styles.heroCircle2}></span>

        <div className={styles.heroContent}>
          <h1>Tyre Wire Scrap</h1>

          <p>
            Tyre Wire Scrap, also known as Tyre Derived Steel (TDS),
            is a light melting scrap obtained during the shredding
            process of waste tyres.
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



      {/* PRODUCT SECTION */}
      <section className={styles.productSection}>

        {/* IMAGE */}
        <div className={styles.imageBox}>
          <Image
            src="/images/tyrewireimg.jpg"
            alt="Tyre Wire Scrap"
            width={600}
            height={420}
            className={styles.productImage}
            priority
          />
        </div>


        {/* CONTENT */}
        <div className={styles.contentBox}>
          <h2>Tyre Wire Scrap (TDS)</h2>

          <p>
            Tyre Wire Scrap, also known as Tyre Derived Steel (TDS),
            is a light melting scrap obtained during the shredding
            process of waste tyres. It mainly consists of high-quality
            steel wires extracted from used tyres during recycling.
          </p>

          <p>
            Recycling tyre wire helps reduce environmental pollution
            by recovering steel that can be reused across multiple
            industries.
          </p>

          <p>
            Our recycling operations process approximately
            <strong> 7,200 tons of tyre wire scrap annually</strong>,
            contributing to sustainable waste management and
            resource conservation.
          </p>

          <ul className={styles.features}>
            <li>✔ High-quality recyclable steel</li>
            <li>✔ Reduces landfill waste</li>
            <li>✔ Supports sustainable recycling</li>
            <li>✔ Cost-effective raw material</li>
            <li>✔ Environmentally responsible process</li>
          </ul>

          <Link href="/contact">
            <button className={styles.enquireBtn}>
              Enquire For Product
            </button>
          </Link>
        </div>

      </section>



      {/* APPLICATIONS */}
      <section id="applications" className={styles.applications}>

        <h2 className={styles.appTitle}>Applications</h2>

        <div className={styles.cardWrapper}>

          {/* CARD 1 */}
          <div className={styles.appCard}>
            <div className={styles.cardImageWrap}>
              <Image
                src="/images/tyre-wire.jpg"
                alt="Steel Recycling"
                width={400}
                height={220}
              />
            </div>

            <h3>Steel Recycling</h3>

            <p>
              Tyre wire scrap is widely used in steel recycling
              industries as a valuable raw material.
            </p>
          </div>



          {/* CARD 2 */}
          <div className={`${styles.appCard} ${styles.middleCard}`}>
            <div className={styles.cardImageWrap}>
              <Image
                src="/images/tw1.jpg"
                alt="Metal Processing"
                width={400}
                height={220}
              />
            </div>

            <h3>Metal Processing</h3>

            <p>
              Processed tyre steel is used in metal processing
              plants and foundries for producing various steel products.
            </p>
          </div>



          {/* CARD 3 */}
          <div className={styles.appCard}>
            <div className={styles.cardImageWrap}>
              <Image
                src="/images/tw2.webp"
                alt="Industrial Applications"
                width={400}
                height={220}
              />
            </div>

            <h3>Industrial Use</h3>

            <p>
              Recycled tyre wire is utilized in multiple industrial
              sectors where steel scrap is required.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}