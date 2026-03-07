"use client";

import styles from "../styles/WhyChooseUs.module.css";
import { useEffect } from "react";

const features = [
  {
    title: "Premium Quality",
    desc: "We ensure high-quality granulated materials with strict quality control standards.",
    icon: "🏆"
  },
  {
    title: "Advanced Technology",
    desc: "Our production process uses modern machinery and advanced recycling technology.",
    icon: "⚙️"
  },
  {
    title: "Eco Friendly",
    desc: "We recycle waste tyres into valuable materials that support sustainable development.",
    icon: "🌱"
  },
  {
    title: "Reliable Supply",
    desc: "We provide consistent supply and dependable service to meet industrial demands.",
    icon: "🚚"
  }
];

export default function WhyChooseUs() {

  useEffect(() => {

    const cards = document.querySelectorAll(`.${styles.card}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));

  }, []);

  return (
    <section className={styles.section}>


      <div className={styles.triangle}></div>

      <div className={styles.container}>

        <h2 className={styles.title}>Why Choose Us</h2>

        <div className={styles.grid}>

          {features.map((feature, index) => (

            <div key={index} className={styles.card}>

              <div className={styles.icon}>
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.desc}</p>

            </div>

          ))}

        </div>

      </div>

      {/* wave divider bottom */}
      <div className={styles.waveBottom}></div>

    </section>
  );
}