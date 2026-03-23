import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";

export const metadata = { title: "Agenda — Will Hawkins Collectief" };

const upcoming = [
  { day: "12", month: "APR", year: "2025", title: "Jesus and the Fishsticks — Live", location: "Popei Poppodium, Eindhoven", type: "Optreden" },
  { day: "26", month: "APR", year: "2025", title: "Open repetitie voor nieuwelingen", location: "Hall of Fame, Tilburg", type: "Repetitie" },
  { day: "10", month: "MEI", year: "2025", title: "Optreden Zorgsector Congres", location: "Locatie volgt", type: "Optreden" },
  { day: "24", month: "MEI", year: "2025", title: "Startersband showcase", location: "Café Wilhelmina, Eindhoven", type: "Showcase" },
  { day: "07", month: "JUN", year: "2025", title: "B.O.F. Festival — zomerspecial", location: "Eindhoven", type: "Festival" },
];

const past = [
  { month: "FEB 2025", title: "Optreden VNG Jaarcongres", location: "Den Haag" },
  { month: "DEC 2024", title: "Kerstconcert — Theater De Boemel", location: "Eindhoven" },
  { month: "OKT 2024", title: "B.O.F. Festival 2024", location: "Eindhoven" },
  { month: "SEP 2024", title: "Congres Verslavingszorg Noord-Brabant", location: "Tilburg" },
];

const typeColors: Record<string, string> = {
  Optreden: "#8b83d4",
  Repetitie: "#4caf87",
  Showcase: "#d9dcf8",
  Festival: "#e8a838",
};

export default function AgendaPage() {
  return (
    <>
      <Nav />
      <PageHero
        label="Agenda"
        title="Aankomende<br/>activiteiten."
        subtitle="Kom langs, kom kijken, kom meebeleven. Onze deelnemers staan voor je klaar."
        photo="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600&auto=format&fit=crop"
      />

      <section className={`section ${styles.agenda}`}>
        <div className="container">
          <ScrollReveal><span className="section__label">Komende evenementen</span></ScrollReveal>
          <ScrollReveal delay={0.05}><h2 className="section__title">Binnenkort te zien.</h2></ScrollReveal>
          <div className={styles.list}>
            {upcoming.map((item, i) => (
              <ScrollReveal key={item.title} direction="left" delay={i * 0.08}>
                <div className={styles.item}>
                  <div className={styles.date}>
                    <span className={styles.day}>{item.day}</span>
                    <span className={styles.month}>{item.month}</span>
                    <span className={styles.year}>{item.year}</span>
                  </div>
                  <div className={styles.info}>
                    <h3>{item.title}</h3>
                    <p>{item.location}</p>
                  </div>
                  <span className={styles.type} style={{ background: typeColors[item.type] + "22", color: typeColors[item.type] }}>
                    {item.type}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.past}`}>
        <div className="container">
          <ScrollReveal><span className="section__label">Terugblik</span></ScrollReveal>
          <ScrollReveal delay={0.05}><h2 className="section__title" style={{ color: "white" }}>Eerder<br/>op het podium.</h2></ScrollReveal>
          <div className={styles.pastList}>
            {past.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.07}>
                <div className={styles.pastItem}>
                  <span className={styles.pastMonth}>{p.month}</span>
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.location}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
