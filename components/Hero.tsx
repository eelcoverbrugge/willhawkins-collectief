"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

import type { Transition } from "framer-motion";

const easeFn: Transition = { ease: "easeInOut" as const };

const blob1animate = {
  x: [0, -80, 20, -60, 0],
  y: [0, 60, -40, 80, 0],
  scale: [1, 1.15, 0.95, 1.1, 1],
  transition: { duration: 18, repeat: Infinity, ...easeFn },
};
const blob2animate = {
  x: [0, 70, -30, 50, 0],
  y: [0, -80, 40, -50, 0],
  scale: [1.05, 0.9, 1.2, 0.95, 1.05],
  transition: { duration: 22, repeat: Infinity, ...easeFn },
};
const blob3animate = {
  x: [0, -40, 60, -20, 0],
  y: [0, 50, -60, 30, 0],
  scale: [1, 1.3, 0.85, 1.15, 1],
  transition: { duration: 28, repeat: Infinity, ...easeFn },
};

/* ── Kinetic headline variants ── */
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};
const word: Variants = {
  hidden: { y: "110%", opacity: 1 },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

// fadeUp is used with custom prop directly on each motion element

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Grid overlay */}
      <div className={styles.grid} />

      {/* Aurora blobs */}
      <div className={styles.aurora}>
        <motion.div className={`${styles.blob} ${styles.blob1}`} animate={blob1animate} />
        <motion.div className={`${styles.blob} ${styles.blob2}`} animate={blob2animate} />
        <motion.div className={`${styles.blob} ${styles.blob3}`} animate={blob3animate} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Tag */}
        <motion.div
          className={styles.tag}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        >
          Stichting · Muziek &amp; Theater · Sociaal
        </motion.div>

        {/* Kinetic headline */}
        <motion.h1
          className={styles.headline}
          variants={container}
          initial="hidden"
          animate="visible"
          aria-label="Kans voor Talent"
        >
          <span className={styles.wordWrap}>
            <motion.span className={styles.wordInner} variants={word}>Kans</motion.span>
          </span>
          <br />
          <span className={styles.wordWrap}>
            <motion.span className={styles.wordInner} variants={word}>voor</motion.span>
          </span>
          <br />
          <span className={`${styles.wordWrap} ${styles.wordAccent}`}>
            <motion.span className={styles.wordInner} variants={word}>Talent</motion.span>
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
        >
          Mensen in herstel van verslaving of met een GGZ-achtergrond in hun
          kracht zetten — door talenten te ontdekken, te ontwikkelen en te
          laten stralen op het podium.
        </motion.p>

        {/* Actions */}
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.95 }}
        >
          <a href="#wat-we-doen" className="btn btn--primary">Ontdek ons werk</a>
          <a href="#contact" className="btn btn--outline">Samenwerken?</a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.6 } }}
      >
        <span>Scroll</span>
        <motion.svg
          viewBox="0 0 24 24" width="20" height="20"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
