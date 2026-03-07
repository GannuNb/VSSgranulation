import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* ABOUT US */}

        <div className={styles.column}>
          <h3>ABOUT US</h3>

          <p>
            <strong>VSS GRANULATION PRIVATE LIMITED</strong> located in
            Hanumakonda, Telangana, India is a renowned name among Rubber
            Industries. At VSS Granulation, consistent quality of Rubber
            Crumb and Rubber Granules at various grades are manufactured
            compliant with all requirements of relevant national standards
            and tested as per prevalent internationally accepted test
            methods.
          </p>
        </div>


        {/* QUICK LINKS */}

        <div className={styles.column}>
          <h3>QUICK LINKS</h3>

          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/products">Our Products</Link></li>
            <li><Link href="/contact">Enquire us</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </div>


        {/* OUR PRODUCTS */}

        <div className={styles.column}>
          <h3>OUR PRODUCTS</h3>

          <ul>
            <li><Link href="/products/crumb-rubber">Crumb Rubber</Link></li>
            <li><Link href="/products/epdm-granules">EPDM Granules</Link></li>
            <li><Link href="/products/tyre-wire">Tyre Wire Scrap</Link></li>
          </ul>
        </div>


        {/* ADDRESS */}

        <div className={styles.column}>
          <h3>ADDRESS</h3>

          <p>
            <strong>VSS GRANULATION</strong>
          </p>

          <p>
            <strong>ADMIN OFF:</strong> #406, 4th Floor, Patel Towers,
            Above EasyBuy, Beside Nagole RTO Office,
            Nagole, Hyderabad, Telangana - 500068
          </p>

          <p>
            <strong>Unit Address:</strong> Shed No.1 in Plot No.14 (Site-A),
            IP Rampur, Kazipet Mandal,<br/>
            Hanumakonda Dist, Telangana - 506151
          </p>

          <p>
            <strong>Phone:</strong> +91 4049471616
          </p>

          <p>
            <strong>Mobile:</strong> +91 8886789356
          </p>

          <p>
            <strong>Email:</strong> info@vssgranulation.com
          </p>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div className={styles.bottom}>
        © {new Date().getFullYear()} VSS Granulation Pvt Ltd. All Rights Reserved.
      </div>

    </footer>
  );
}