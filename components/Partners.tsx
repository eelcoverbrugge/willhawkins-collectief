import ScrollReveal from "./ScrollReveal";
import styles from "./Partners.module.css";

const partners = [
  { type: "Subsidiegever", name: "Serra Foundation", body: "Ondersteunt groepen die aandacht nodig hebben op het gebied van gezond leven, psychosociaal welzijn en toegang tot cultuur.", featured: true },
  { type: "Partner · Eindhoven", name: "Popei", body: "Repetitieruimtes, mensen uit de muziekindustrie en een poppodium voor live performances.", featured: false },
  { type: "Partner · Zorg", name: "Novadic-Kentron", body: "Verslavingszorginstelling met muziekthera­peuten en herstelprogramma's.", featured: false },
  { type: "Klanten", name: "Poppodia & Instellingen", body: "Café Wilhelmina, Theater De Boemel, B.O.F. Festival, VNG, zorgsector congressen en meer.", featured: false },
];

export default function Partners() {
  return (
    <section className={`section ${styles.section}`} id="partners">
      <div className="container">
        <ScrollReveal><span className="section__label">Partners &amp; opdrachtgevers</span></ScrollReveal>
        <ScrollReveal delay={0.05}><h2 className="section__title">Samen sterker.</h2></ScrollReveal>
        <div className={styles.grid}>
          {partners.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.08}>
              <div className={`${styles.card} ${p.featured ? styles.featured : ""}`}>
                <span className={styles.type}>{p.type}</span>
                <h3>{p.name}</h3>
                <p>{p.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
