"use client";

import { useEffect, useRef } from "react";
import styles from "../styles/Industries.module.css";

type Industry = {
  title: string;
  image: string;
  description: string;
};

const industries: Industry[] = [
  {
    title: "Road Construction",
    image: "/images/road-construction.webp",
    description:
      "Crumb rubber improves asphalt durability and flexibility for longer lasting road surfaces."
  },
  {
    title: "Sports Flooring",
    image: "/images/epdm1.jpeg",
    description:
      "Rubber granules provide shock absorption and durability for sports tracks and athletic surfaces."
  },
  {
    title: "Playgrounds",
    image: "/images/epdm2.jpg",
    description:
      "EPDM safety flooring creates safe, impact-resistant playground surfaces for children."
  },
  {
    title: "Rubber Manufacturing",
    image: "/images/epdmg1.jpg",
    description:
      "Recycled rubber materials are used in producing mats, tiles and industrial rubber products."
  }
];

export default function IndustriesWeServe() {

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {

    cardsRef.current.forEach((card) => {

      if (!card) return;

      card.addEventListener("mousemove", (e: MouseEvent) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

      });

    });

  }, []);

  return (
    <section className={styles.industriesSection}>

      <div className={styles.container}>

        <h2 className={styles.sectionTitle}>Industries We Serve</h2>

        <div className={styles.cards}>

          {industries.map((industry, index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}            >

              <div className={styles.imageWrapper}>
                <img src={industry.image} alt={industry.title} />
              </div>

              <h3>{industry.title}</h3>

              <p>{industry.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}