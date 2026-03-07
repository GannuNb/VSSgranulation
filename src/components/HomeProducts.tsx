import styles from "../styles/HomeProducts.module.css";
import Link from "next/link";

const products = [
  {
    title: "Crumb Rubber",
    image: "/images/crumb-rubber.jpg",
    description:
      "High-quality recycled rubber granules used for sports surfaces, playground flooring and industrial applications.",
    link: "/products/crumb-rubber"
  },
  {
    title: "EPDM Granules",
    image: "/images/epdm.jpg",
    description:
      "Colored EPDM granules ideal for playground flooring, athletic tracks and decorative safety surfaces.",
    link: "/products/epdm-granules"
  },
  {
    title: "Tyre Wire",
    image: "/images/tyre-wire.jpg",
    description:
      "Recovered high-strength steel wire extracted from recycled tyres for industrial reuse.",
    link: "/products/tyre-wire"
  }
];

export default function HomeProducts() {
  return (
    <section className={styles.productsSection}>

      {/* glowing background circles */}
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>

      <div className={styles.container}>

        <h2 className={styles.sectionTitle}>Our Products</h2>

        <div className={styles.cards}>

          {products.map((product, index) => (
            <div key={index} className={styles.card}>

              <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.title}/>
              </div>

              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <Link href={product.link} className={styles.learnBtn}>
                Learn More →
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}