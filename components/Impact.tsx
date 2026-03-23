import ScrollReveal from "./ScrollReveal";
import styles from "./Impact.module.css";

export default function Impact() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <ScrollReveal direction="left">
          <blockquote className={styles.quote}>
            <p>&ldquo;Niet de verslaving klein maken,<br />maar mensen groter.&rdquo;</p>
            <cite>— Novadic-Kentron, partner</cite>
          </blockquote>
        </ScrollReveal>

        <div className={styles.stats}>
          {[
            { num: "3",  label: "Locaties\nEhv · Vught · Tilburg" },
            { num: "2",  label: "Actieve\nbands" },
            { num: "∞",  label: "Kansen\nvoor talent" },
          ].map((s, i) => (
            <ScrollReveal key={s.num} direction="scale" delay={i * 0.12}>
              <div className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
