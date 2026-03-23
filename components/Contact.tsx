"use client";
import { FormEvent, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <ScrollReveal><span className="section__label" style={{ color: "rgba(217,220,248,0.65)" }}>Contact</span></ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="section__title" style={{ color: "var(--white)" }}>Laten we<br />kennismaken.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>Ben je een culturele instelling, zorgsector partner of geïnteresseerde? We horen graag van je.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.group}>
              <label htmlFor="naam">Naam</label>
              <input type="text" id="naam" name="naam" placeholder="Je naam" required />
            </div>
            <div className={styles.group}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="je@email.nl" required />
            </div>
            <div className={styles.group}>
              <label htmlFor="organisatie">Organisatie</label>
              <input type="text" id="organisatie" name="organisatie" placeholder="Optioneel" />
            </div>
            <div className={styles.group}>
              <label htmlFor="bericht">Bericht</label>
              <textarea id="bericht" name="bericht" rows={5} placeholder="Vertel ons waarmee we je kunnen helpen..." required />
            </div>
            <button type="submit" className={`btn btn--full ${sent ? styles.sent : styles.submitBtn}`}>
              {sent ? "Verzonden ✓" : "Verstuur bericht"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
