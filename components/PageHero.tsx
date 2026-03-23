"use client";
import { motion } from "framer-motion";
import styles from "./PageHero.module.css";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
  photo?: string; // Unsplash URL
}

export default function PageHero({ label, title, subtitle, photo }: Props) {
  return (
    <section className={styles.hero}>
      {photo && (
        <div className={styles.photo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt="" />
          <div className={styles.overlay} />
        </div>
      )}
      <div className={styles.grid} />
      <div className={`container ${styles.inner}`}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {label}
        </motion.span>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
