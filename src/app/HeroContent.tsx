"use client";

import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export default function HeroContent() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={styles.heroContent}>

      <h1 className={`${styles.heroTitle} ${animate ? styles.animateTitle : ""}`}>
        VSS GRANULATION
      </h1>

      <p className={`${styles.heroText} ${animate ? styles.animateText : ""}`}>
        Leading manufacturer of high-quality granulated materials,
        delivering reliable solutions for industrial applications.
      </p>

      <a
        href="#products"
        className={`${styles.heroBtn} ${animate ? styles.animateBtn : ""}`}
      >
        Explore Products
      </a>

    </div>
  );
}