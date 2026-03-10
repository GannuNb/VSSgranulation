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
            EPDM colored rubber granules are widely used for sports and
            playground surfaces due to their durability, flexibility,
            and vibrant appearance.
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
            src="/images/topimg.webp"
            alt="EPDM Granules"
            width={600}
            height={420}
            className={styles.productImage}
            priority
          />
        </div>


        {/* CONTENT */}
        <div className={styles.contentBox}>
          <h2>EPDM Colored Rubber Granules</h2>

          <p>
            EPDM colored rubber granules are increasingly popular for
            commercial and private sports playgrounds due to their
            multifunctional design.
          </p>

          <p>
            These granules combine special polymer compounds with
            various components, creating a versatile and durable
            surface material ideal for modern sports infrastructure.
          </p>

          <p>
            The structure of EPDM rubber granules provides an
            aesthetically pleasing, durable, and UV-resistant surface,
            making it an excellent choice for sports ground flooring.
          </p>

          <ul className={styles.features}>
            <li>✔ Durable, robust and highly resilient</li>
            <li>✔ Combines strength with breathability</li>
            <li>✔ Allows water permeability</li>
            <li>✔ Environmentally friendly material</li>
            <li>✔ Versatile for multiple applications</li>
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
                src="/images/epdm1.jpeg"
                alt="Playground Flooring"
                width={400}
                height={220}
              />
            </div>

            <h3>Playground Flooring</h3>

            <p>
              EPDM granules provide a safe, shock-absorbing surface for
              children’s playgrounds and recreational areas.
            </p>
          </div>



          {/* CARD 2 */}
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
              Widely used for athletic tracks and sports flooring
              thanks to their durability and weather resistance.
            </p>
          </div>



          {/* CARD 3 */}
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
              Ideal for school floors, courtyards, and multipurpose
              playgrounds requiring flexible and long-lasting surfaces.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}