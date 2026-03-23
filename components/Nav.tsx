"use client";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#over-ons",    label: "Over ons" },
    { href: "#wat-we-doen", label: "Wat we doen" },
    { href: "#deelnemers",  label: "Deelnemers" },
    { href: "#partners",    label: "Partners" },
    { href: "#agenda",      label: "Agenda" },
    { href: "#blog",        label: "Blog" },
  ];

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>WHC</span>
          <span className={styles.logoSub}>Will Hawkins Collectief</span>
        </a>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className={styles.cta} onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>

        <button
          className={`${styles.burger} ${open ? styles.burgerActive : ""}`}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
