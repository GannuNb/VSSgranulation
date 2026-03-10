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
            Tyre Wire Scrap, also referred to as Tyre Derived Steel (TDS),
            is a recyclable steel material recovered during the tyre
            recycling process. When waste tyres are shredded and
            processed to extract rubber granules, high-strength steel
            wires embedded within the tyres are separated and collected.
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
            src="/images/tyre_wire_a1.png"
            alt="Tyre Wire Scrap"
            width={600}
            height={420}
            className={styles.productImage}
            priority
          />
        </div>

        <div className={styles.contentBox}>
          <h2>Tyre Wire Scrap (TDS)</h2>

          <p>
            Tyre Wire Scrap is generated as a by-product during the
            mechanical recycling of end-of-life tyres. Modern tyre
            manufacturing incorporates high-tensile steel wires within
            the rubber structure to enhance durability and strength.
          </p>

          <p>
            During the tyre shredding and granulation process, advanced
            magnetic separation systems are used to extract these steel
            components from rubber materials. The recovered steel wires
            are then processed and prepared for reuse in steel
            manufacturing and metal recycling industries.
          </p>

          <p>
            Recycling tyre wire scrap plays an important role in
            reducing environmental waste while recovering valuable
            metals that can be reused in industrial production.
          </p>

          <p>
            Our recycling facility processes approximately
            <strong> 7,200 tons of tyre wire scrap annually</strong>,
            supporting sustainable tyre recycling and responsible
            resource management.
          </p>

          <ul className={styles.features}>
            <li>✔ High tensile recyclable steel</li>
            <li>✔ Efficient recovery from tyre recycling process</li>
            <li>✔ Reduces landfill waste and environmental impact</li>
            <li>✔ Valuable raw material for steel manufacturing</li>
            <li>✔ Supports circular economy and sustainability</li>
          </ul>

          <Link href="/contact">
            <button className={styles.enquireBtn}>
              Enquire For Product
            </button>
          </Link>
        </div>

      </section>

      {/* RECOVERY PROCESS */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Tyre Wire Recovery Process</h2>
          <p>
            Tyre wire scrap is recovered during the mechanical recycling
            of scrap tyres. Tyres contain high-tensile steel wires which
            provide structural strength and durability.
          </p>

          <p>
            In the first stage, whole tyres are fed into a primary
            shredder that cuts them into large tyre chips. These chips
            are then passed through secondary shredders and granulators
            to break them down into smaller pieces.
          </p>

          <p>
            During this stage, powerful magnetic separators extract
            steel wires from rubber particles. These magnets capture
            steel fragments while allowing rubber granules to move
            further into the processing line.
          </p>

          <p>
            The recovered steel wires are collected, cleaned, and
            prepared for reuse in metal recycling and steel
            manufacturing industries.
          </p>

          <h3>Machines Used</h3>

          <ul className={styles.features}>
            <li>Primary Tyre Shredder</li>
            <li>Secondary Shredder</li>
            <li>Granulators</li>
            <li>Magnetic Separators</li>
            <li>Steel Collection Conveyors</li>
            <li>Material Screening Units</li>
          </ul>

        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Benefits of Tyre Wire Recycling</h2>
          <p>
            Recovering steel from scrap tyres provides significant
            environmental and industrial advantages. Instead of being
            discarded as waste, tyre wire scrap can be recycled and
            reused as a valuable resource for steel production.
          </p>

          <ul className={styles.features}>
            <li>Reduces environmental pollution caused by tyre waste</li>
            <li>Recovers high-quality steel for industrial reuse</li>
            <li>Supports sustainable recycling and resource conservation</li>
            <li>Provides cost-effective raw material for steel plants</li>
            <li>Reduces the need for mining new iron ore resources</li>
            <li>Promotes circular economy in metal and rubber industries</li>
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
                src="/images/tyre-wire.jpg"
                alt="Steel Recycling"
                width={400}
                height={220}
              />
            </div>

            <h3>Steel Recycling</h3>
            <p>
              Tyre wire scrap is widely used in steel recycling plants
              where it is melted and processed into new steel products.
            </p>
          </div>

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
              Metal processing industries use tyre derived steel as a
              secondary raw material for producing industrial and
              constr
              uction materials.
            </p>
          </div>
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
              Recovered tyre wire is used in metal fabrication,
              steel production, and various manufacturing
              applications requiring recycled steel materials.
            </p>
          </div>

        </div>
      </section>

      {/* INDUSTRIAL IMPORTANCE */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Industrial Importance of Tyre Wire Scrap</h2>
          <p>
            Tyre wire scrap is considered a valuable secondary raw
            material for steel recycling industries. The steel used
            in tyre manufacturing is designed to withstand high
            pressure and stress conditions, making it ideal for
            reuse in industrial applications.
          </p>

          <p>
            Steel plants utilize tyre wire scrap as part of their
            melting charge during steel production. This reduces
            dependence on virgin raw materials and supports
            sustainable manufacturing practices.
          </p>

          <p>
            Recycling tyre wire scrap also helps prevent the
            accumulation of scrap tyres in landfills and contributes
            to responsible waste management.
          </p>
        </div>
      </section>

      {/* QUALITY SECTION */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Quality and Processing Standards</h2>
          <p>
            At VSS Granulation Pvt Ltd, tyre wire scrap is processed
            using advanced recycling systems designed to ensure
            maximum material recovery and purity.
          </p>

          <p>
            Powerful magnetic separators remove steel wires from
            shredded rubber materials during the granulation
            process. The recovered steel is cleaned and inspected
            before being supplied to recycling industries.
          </p>

          <p>
            Our strict quality control procedures ensure that
            recovered tyre wire meets industrial standards for
            steel recycling and metal processing operations.
          </p>

        </div>
      </section>
    </div>
  );
}