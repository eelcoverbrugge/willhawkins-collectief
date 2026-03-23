import ScrollReveal from "./ScrollReveal";
import styles from "./Agenda.module.css";

const items = [
  { day: "12", month: "APR", title: "Jesus and the Fishsticks — Live", location: "Popei Poppodium, Eindhoven" },
  { day: "26", month: "APR", title: "Open repetitie voor nieuwelingen", location: "Hall of Fame, Tilburg" },
  { day: "10", month: "MEI", title: "Optreden Zorgsector Congres", location: "Locatie volgt" },
];

export default function Agenda() {
  return (
    <section className={`section ${styles.section}`} id="agenda">
      <div className="container">
        <ScrollReveal><span className="section__label">Agenda</span></ScrollReveal>
        <ScrollReveal delay={0.05}><h2 className="section__title">Aankomende<br />activiteiten.</h2></ScrollReveal>
        <div className={styles.list}>
          {items.map((item, i) => (
            <ScrollReveal key={item.title} direction="left" delay={i * 0.1}>
              <div className={styles.item}>
                <div className={styles.date}>
                  <span className={styles.day}>{item.day}</span>
                  <span className={styles.month}>{item.month}</span>
                </div>
                <div className={styles.info}>
                  <h4>{item.title}</h4>
                  <p>{item.location}</p>
                </div>
                <a href="#contact" className="btn btn--sm">Info</a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
