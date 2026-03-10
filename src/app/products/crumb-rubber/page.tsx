import styles from "../../../styles/Productpage.module.css";
import Link from "next/link";
import Image from "next/image";

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
      Crumb rubber is produced by recycling scrap tyres into small,
      uniform rubber granules used in various industrial and
      commercial applications.
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
      src="/images/crumb-rubber.jpg"
      alt="Crumb Rubber"
      width={600}
      height={420}
      className={styles.productImage}
      priority
    />
  </div>

  <div className={styles.contentBox}>
    <h2>Crumb Rubber Overview</h2>

    <p>
      Crumb rubber is made by reducing scrap tires into small,
      uniform granules. During processing, reinforcing materials
      such as steel and fiber are removed along with contaminants
      like dust, glass, or rock.
    </p>

    <p>
      VSS Granulation Pvt Ltd has the nationwide capacity to produce
      more than <strong>52,000 tonnes of crumb rubber annually</strong>
      for a wide variety of commercial applications.
    </p>

    <ul className={styles.features}>
      <li>✔ High-quality recycled rubber</li>
      <li>✔ Consistent particle size</li>
      <li>✔ Eco-friendly recycling process</li>
      <li>✔ Suitable for multiple industries</li>
      <li>✔ Large-scale production capacity</li>
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
      We use the ambient mechanical grinding method where scrap tyres
      are processed at normal room temperature through a multi-step
      recycling system.
    </p>

    <p>
      Tyres are passed through shredders to create chips. These chips
      are then processed through granulators where steel and fiber are
      removed. Magnetic separation removes remaining steel while
      shaking screens and wind sifters remove fiber.
    </p>

    <p>
      Further grinding in high-speed rotary mills produces finer
      rubber particles suitable for different industrial applications.
    </p>

    <h3>Machines Used</h3>

    <ul className={styles.features}>
      <li>Primary Shredder</li>
      <li>Secondary Shredder</li>
      <li>Granulators</li>
      <li>Grinding Mills</li>
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
        tennis courts, and basketball courts.
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
        Used in bumpers, splash guards, fenders, and floor mats
        for cars and trucks.
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
        roof liners and industrial flooring.
      </p>
    </div>

  </div>
</section>



{/* PRODUCT TYPES */}
<section className={styles.infoSection}>

  <div className={styles.infoContainer}>

    <h2>Crumb Rubber Powder - 30 Mesh</h2>

    <p>
      Our premium 30 mesh crumb rubber is widely used for tyre
      manufacturing, sports ground surfacing, rubber mats,
      rubber bushes and flaps production.
    </p>

    <p>
      Our production facility delivers a capacity of
      <strong> 2200 tons per month</strong>.
    </p>

    <h3>Quality Assurance</h3>

    <p>
      Each batch undergoes strict quality testing at our advanced
      testing unit to ensure superior quality and performance.
    </p>


    <h2>Crumb Rubber Powder - 40 Mesh</h2>

    <p>
      Mesh refers to the number of holes per inch in the screening
      process. A 40 mesh rubber powder passes through a screen with
      40 holes per inch producing fine rubber particles.
    </p>


    <h2>Crumb Rubber Granules</h2>

    <p>
      Crumb rubber granules are produced from recycled automobile
      and truck tyres. Steel and tire cord are removed during
      processing leaving behind high-quality rubber granules.
    </p>

    <p>
      These granules are widely used in artificial turf systems
      where they provide cushioning and durability.
    </p>

  </div>

</section>

    </div>
  );
}