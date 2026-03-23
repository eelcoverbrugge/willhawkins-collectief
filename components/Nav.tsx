"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const links = [
  { href: "/over-ons",    label: "Over ons" },
  { href: "/wat-we-doen", label: "Wat we doen" },
  { href: "/deelnemers",  label: "Deelnemers" },
  { href: "/partners",    label: "Partners" },
  { href: "/agenda",      label: "Agenda" },
  { href: "/blog",        label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt=""
            className={styles.logoImg}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
          <span className={styles.logoText}>
            <span className={styles.logoMark}>WHC</span>
            <span className={styles.logoSub}>Will Hawkins Collectief</span>
          </span>
        </Link>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.cta} onClick={() => setOpen(false)}>
            Contact
          </Link>
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
