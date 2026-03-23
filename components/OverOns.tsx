import ScrollReveal from "./ScrollReveal";
import styles from "./OverOns.module.css";

const values = [
  {
    title: "Missie",
    body: "Talenten helpen ontdekken, ontwikkelen, presenteren en laten ervaren — voor mensen in herstel.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="24" r="20"/><path d="M24 14v10l6 4"/>
      </svg>
    ),
  },
  {
    title: "Visie",
    body: "Mensen met verslavings- of psychische problemen laten participeren in de maatschappij op een gewaardeerde en betekenisvolle manier.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16"/>
        <path d="M32 8l8 8-8 8"/>
      </svg>
    ),
  },
  {
    title: "Aanpak",
    body: "Alleen de doelgroep staat op het podium. Professionals zijn dienend en op de achtergrond — zodat deelnemers kunnen shinen.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 36c0-6.6 5.4-12 12-12s12 5.4 12 12"/>
        <circle cx="24" cy="18" r="6"/>
      </svg>
    ),
  },
];

export default function OverOns() {
  return (
    <section className={`section ${styles.section}`} id="over-ons">
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <ScrollReveal><span className="section__label">Over het collectief</span></ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="section__title">Ieder mens<br />heeft talent.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>Het Will Hawkins Collectief is een stichting die mensen in herstel van verslaving of
            met een GGZ-achtergrond een podium biedt. We faciliteren, verbinden en presenteren —
            zodat verborgen talent zichtbaar wordt.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p>Onze aanpak snijdt het mes aan twee kanten: een breed publiek raakt betrokken bij
            een maatschappelijk vraagstuk, terwijl deelnemers werken aan hun persoonlijke
            uitdaging en toekomst.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a href="#wat-we-doen" className="btn btn--primary">Wat we doen</a>
          </ScrollReveal>
        </div>

        <div className={styles.cards}>
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className={styles.card}>
                <div className={styles.icon}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
