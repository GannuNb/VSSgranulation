import styles from "../styles/HomeProducts.module.css";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    title: "Crumb Rubber",
    image: "/images/crumb_rubber_a2.png",
    description:
      "High-quality recycled rubber granules produced from processed waste tyres. Widely used in sports surfaces, playground flooring, rubber tiles, road construction, and various industrial applications due to its durability and shock-absorbing properties.",
    link: "/products/crumb-rubber"
  },
  {
    title: "EPDM Granules",
    image: "/images/epdm_a1.png",
    description:
      "Premium colored EPDM granules designed for long-lasting outdoor performance. Ideal for playground safety flooring, athletic tracks, landscaping surfaces, and decorative applications thanks to their UV resistance and vibrant color stability.",
    link: "/products/epdm-granules"
  },
  {
    title: "Tyre Wire",
    image: "/images/tyre-wire.jpg",
    description:
      "Recovered high-strength steel wire extracted from recycled tyres. This durable material is widely reused in construction reinforcement, industrial manufacturing, and metal recycling applications.",
    link: "/products/tyre-wire"
  }
];

export default function HomeProducts() {
  return (
    <section id="products" className={styles.productsSection}>

      <div className={styles.container}>

        <h2 className={styles.sectionTitle}>Our Products</h2>

        {products.map((product, index) => (

          <div
            key={index}
            className={`${styles.productRow} ${index % 2 !== 0 ? styles.reverse : ""}`}
          >

            {/* IMAGE */}

            <div className={styles.productImage}>
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={400}
              />
            </div>

            {/* TEXT */}

            <div className={styles.productContent}>
              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <Link href={product.link} className={styles.learnBtn}>
                Learn More →
              </Link>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}