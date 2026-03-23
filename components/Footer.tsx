import styles from "./Footer.module.css";

const navLinks = ["Over ons", "Wat we doen", "Deelnemers", "Partners", "Agenda", "Blog", "Contact"];
const partners = ["Serra Foundation", "Popei Poppodium", "Novadic-Kentron", "Hall of Fame Tilburg"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.mark}>WHC</span>
          <span className={styles.tagline}>Kans voor Talent</span>
          <p>Stichting Will Hawkins Collectief<br />Eindhoven · Vught · Tilburg</p>
        </div>
        <nav className={styles.nav}>
          <h4>Navigatie</h4>
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`}>{l}</a>
          ))}
        </nav>
        <div className={styles.partners}>
          <h4>Partners</h4>
          {partners.map((p) => <span key={p}>{p}</span>)}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>© 2025 Will Hawkins Collectief · Alle rechten voorbehouden</p>
        </div>
      </div>
    </footer>
  );
}
