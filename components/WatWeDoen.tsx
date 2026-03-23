import ScrollReveal from "./ScrollReveal";
import styles from "./WatWeDoen.module.css";

const diensten = [
  { num: "01", title: "Podium bieden", body: "We organiseren optredens en presentaties waarbij deelnemers hun muzikaal en theatraal talent voor een breed publiek kunnen tonen." },
  { num: "02", title: "Talent faciliteren", body: "Van repetitieruimte tot bandcoaching — we bieden de infrastructuur en begeleiding die deelnemers nodig hebben om te groeien." },
  { num: "03", title: "Verbinden", body: "We koppelen deelnemers aan professionele artiesten, culturele instellingen en de zorgsector voor wederzijds begrip en opheffing van stigma." },
  { num: "04", title: "Maatschappelijke impact", body: "Door culturele boodschappen in te zetten bereiken we het algemeen publiek in het sociaal domein met nieuwe opvattingen over herstel." },
];

export default function WatWeDoen() {
  return (
    <section className={`section ${styles.section}`} id="wat-we-doen">
      <div className="container">
        <ScrollReveal><span className="section__label" style={{ color: "rgba(217,220,248,0.65)" }}>Wat we doen</span></ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="section__title" style={{ color: "var(--white)" }}>Podium. Verbinding.<br />Ontwikkeling.</h2>
        </ScrollReveal>
        <div className={styles.grid}>
          {diensten.map((d, i) => (
            <ScrollReveal key={d.num} delay={i * 0.08}>
              <div className={styles.card}>
                <span className={styles.num}>{d.num}</span>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
