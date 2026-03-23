import ScrollReveal from "./ScrollReveal";
import styles from "./Deelnemers.module.css";

const bands = [
  {
    phase: "Fase 1 · Gevorderd",
    name: "Jesus and\nthe Fishsticks",
    body: "De meer ervaren muzikanten hebben een eigen naam en identiteit ontwikkeld en streven naar ondersteunde zelfstandigheid. Ze treden op en bouwen aan hun eigen artistieke koers.",
    tag: "Live optredens",
    featured: true,
  },
  {
    phase: "Fase 2 · Startersband",
    name: "De Starters­band",
    body: "Aan het leren een band te vormen, samen te spelen en eigen songs te schrijven. Ondersteund door ervaren deelnemers en een professionele bandcoach.",
    tag: "In ontwikkeling",
    featured: false,
  },
  {
    phase: "Fase 3 · Instroom",
    name: "Nieuwe leden",
    body: "Aparte repetities begeleiden nieuwelingen stap voor stap richting deelname aan de groep. Repetities in Eindhoven, Vught en binnenkort ook Tilburg.",
    tag: "Instroom begeleiding",
    featured: false,
  },
];

export default function Deelnemers() {
  return (
    <section className={`section ${styles.section}`} id="deelnemers">
      <div className="container">
        <ScrollReveal><span className="section__label">Onze deelnemers</span></ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="section__title">Drie fasen,<br />één gemeenschap.</h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {bands.map((b, i) => (
            <ScrollReveal key={b.phase} delay={i * 0.1}>
              <div className={`${styles.card} ${b.featured ? styles.featured : ""}`}>
                <span className={styles.phase}>{b.phase}</span>
                <h3>{b.name}</h3>
                <p>{b.body}</p>
                <span className={styles.tag}>{b.tag}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
