import type { Metadata } from "next";
import styles from "../../../styles/Productpage.module.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Crumb Rubber Manufacturer | Recycled Rubber Granules | VSS Granulation",

  description:
    "VSS Granulation manufactures high-quality crumb rubber from recycled tyres. Our rubber granules are widely used in sports surfaces, playground flooring, road construction and industrial applications.",

  keywords: [
    "crumb rubber manufacturer",
    "recycled rubber granules",
    "crumb rubber supplier India",
    "tyre recycling crumb rubber",
    "rubber granules for sports flooring",
  ],

  openGraph: {
    title: "Crumb Rubber | VSS Granulation",
    description:
      "Premium crumb rubber produced from recycled tyres for sports flooring, road construction and industrial use.",
    url: "https://vssgranulation.com/products/crumb-rubber/",

    images: [
      {
        url: "https://vssgranulation.com/images/Crumbrub1.jpg",
        width: 1200,
        height: 630,
        alt: "Crumb Rubber by VSS Granulation",
      },
    ],

    type: "website",
  },
};

export default function CrumbRubber() {
  return (
    <div className={styles.productPage}>

      {/* HERO */}
      <section className={styles.hero}>
        <span className={styles.heroCircle1}></span>
        <span className={styles.heroCircle2}></span>

        <div className={styles.heroContent}>
          <h1>Crumb Rubber</h1>

          <p>
            At VSS Granulation Pvt Ltd, we specialize in producing premium
            crumb rubber with consistent particle size and superior purity.
            Our advanced recycling facility ensures reliable performance for
            a wide range of commercial and industrial applications while
            contributing to environmentally responsible waste management.
          </p>

          <div className={styles.heroBtns}>
            <Link href="/contact" className={styles.heroBtnPrimary}>
              Enquire Now
            </Link>

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
            src="/images/Crumbrub1.jpg"
            alt="Crumb rubber granules manufactured by VSS Granulation"
            width={600}
            height={420}
            className={styles.productImage}
            priority
          />
        </div>

        <div className={styles.contentBox}>
          <h2>Crumb Rubber Overview</h2>

          <p>
            Crumb rubber is produced by reducing scrap automobile and truck
            tyres into small rubber particles. During the recycling process,
            reinforcing materials such as steel wire and textile fibers are
            carefully removed to produce clean and high-quality rubber
            granules suitable for industrial use.
          </p>

          <p>
            The recycled rubber undergoes multiple stages of shredding,
            granulating, and screening to achieve precise particle sizes
            required for different industrial applications. This process
            ensures excellent elasticity, durability, and consistency in
            the final product.
          </p>

          <p>
            VSS Granulation Pvt Ltd operates advanced recycling facilities
            with a nationwide production capacity exceeding
            <strong> 52,000 tonnes of crumb rubber annually</strong>. Our
            products are widely used in infrastructure projects, rubber
            manufacturing industries, sports surfaces, and construction
            materials.
          </p>

          <p>
            By converting waste tyres into valuable raw materials, crumb
            rubber helps reduce landfill waste while promoting sustainable
            recycling practices and environmentally friendly manufacturing.
          </p>

          <ul className={styles.features}>
            <li>✔ High-quality recycled rubber</li>
            <li>✔ Consistent particle size distribution</li>
            <li>✔ Eco-friendly tyre recycling process</li>
            <li>✔ Suitable for multiple industries</li>
            <li>✔ Large-scale production capacity</li>
            <li>✔ Excellent durability and flexibility</li>
          </ul>

          <Link href="/contact">
            <button className={styles.enquireBtn}>
              Enquire For Product
            </button>
          </Link>
        </div>

      </section>

      {/* PRODUCTION PROCESS */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Production Process</h2>
          <p>
            Our crumb rubber production follows a highly efficient ambient
            mechanical grinding process. Scrap tyres collected from various
            sources are first inspected and prepared before entering the
            recycling line.
          </p>

          <p>
            In the first stage, whole tyres are fed into a primary shredder
            which breaks them down into large tyre chips. These chips are
            further reduced in size using secondary shredders and
            granulators to create smaller rubber pieces suitable for
            further processing.
          </p>

          <p>
            During this stage, powerful magnetic separators remove steel
            components while advanced fiber separation systems eliminate
            textile materials present in the tyre structure.
          </p>

          <p>
            The remaining rubber particles are then processed through
            high-speed grinding mills which convert them into fine crumb
            rubber powder or granules. The material is finally screened
            through precision mesh systems to ensure uniform particle
            size distribution for different industrial applications.
          </p>

          <p>
            Our production process ensures minimal contamination,
            high rubber purity, and consistent product quality suitable
            for demanding commercial and industrial applications.
          </p>

          <h3>Machines Used</h3>

          <ul className={styles.features}>
            <li>Primary Shredder</li>
            <li>Secondary Shredder</li>
            <li>Granulators</li>
            <li>Grinding Mills</li>
            <li>Magnetic Separators</li>
            <li>Fiber Separation Systems</li>
          </ul>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Benefits of Crumb Rubber</h2>
          <p>
            Crumb rubber provides numerous benefits across industries due to its
            flexibility, durability, and environmentally friendly nature.
            Recycling scrap tyres into crumb rubber not only reduces landfill
            waste but also creates valuable raw materials for multiple
            applications.
          </p>

          <ul className={styles.features}>
            <li>Reduces environmental pollution by recycling waste tyres</li>
            <li>Provides excellent shock absorption and cushioning</li>
            <li>Improves durability of sports and playground surfaces</li>
            <li>Enhances strength and flexibility of rubber products</li>
            <li>Cost-effective alternative raw material</li>
            <li>Supports sustainable and eco-friendly manufacturing</li>
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
                src="/images/homeimg2.jpg"
                alt="Sport Surfaces"
                width={400}
                height={220}
              />
            </div>

            <h3>Sports Surfaces</h3>
            <p>
              Used in playgrounds, school sports areas, athletic tracks,
              tennis courts, football fields, and basketball courts
              to provide cushioning and improved safety.
            </p>
          </div>

          <div className={`${styles.appCard} ${styles.middleCard}`}>
            <div className={styles.cardImageWrap}>
              <Image
                src="/images/crumb1.jpg"
                alt="Automotive Industry"
                width={400}
                height={220}
              />
            </div>

            <h3>Automotive Industry</h3>
            <p>
              Used in bumpers, splash guards, fenders, floor mats,
              gaskets, and other automotive rubber components
              requiring flexibility and durability.
            </p>
          </div>

          <div className={styles.appCard}>
            <div className={styles.cardImageWrap}>
              <Image
                src="/images/crumb4.jpg"
                alt="Construction"
                width={400}
                height={220}
              />
            </div>

            <h3>Construction</h3>
            <p>
              Used in flooring tiles, foundation waterproofing,
              roof liners, rubberized asphalt roads, and
              industrial flooring solutions.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT TYPES */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Crumb Rubber Powder - 30 Mesh</h2>

          <p>
            Our 30 mesh crumb rubber powder is one of the most widely
            used grades in the rubber manufacturing industry. It offers
            an ideal balance of particle size, elasticity, and durability
            making it suitable for numerous industrial applications.
          </p>

          <p>
            This grade is commonly used in tyre retreading, rubber mat
            production, sports flooring systems, molded rubber components,
            rubber bushes, and industrial rubber goods.
          </p>

          <p>
            Our production facility delivers a capacity of
            <strong> 2200 tons per month</strong> ensuring consistent
            supply to meet industrial demand.
          </p>

          <h3>Quality Assurance</h3>

          <p>
            Each batch undergoes strict quality testing at our advanced
            testing unit to ensure superior product quality, consistent
            particle size, and reliable performance across applications.
          </p>


          <h2>Crumb Rubber Powder - 40 Mesh</h2>

          <p>
            40 mesh crumb rubber powder is a finer grade used for
            specialized industrial applications requiring smoother
            texture and enhanced blending properties.
          </p>

          <p>
            It is commonly used in rubberized asphalt roads, adhesives,
            sealants, molded rubber products, and various composite
            materials where finer rubber particles are required.
          </p>

          <p>
            The finer particle size improves flexibility, shock
            absorption, and durability in the final products.
          </p>


          <h2>Crumb Rubber Granules</h2>

          <p>
            Crumb rubber granules are produced from recycled automobile
            and truck tyres. During processing, steel wires and textile
            cords are completely removed leaving behind clean and
            high-quality rubber granules.
          </p>

          <p>
            These granules are widely used in artificial turf systems,
            playground surfaces, landscaping materials, and safety
            flooring applications.
          </p>

          <p>
            Their excellent cushioning effect helps reduce injuries
            in sports environments while providing long-lasting
            durability under heavy usage conditions.
          </p>

          <p>
            Rubber granules are also used in rubberized asphalt,
            molded rubber products, drainage layers, and sound
            insulation materials in modern construction projects.
          </p>

        </div>
      </section>
    </div>
  );
}