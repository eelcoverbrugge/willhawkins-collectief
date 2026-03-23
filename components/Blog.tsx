import ScrollReveal from "./ScrollReveal";
import styles from "./Blog.module.css";

const posts = [
  { tag: "Deelnemersverhaal", title: '"Muziek gaf me mijn stem terug"', body: "Een persoonlijk verhaal over hoe het spelen in een band bijdroeg aan herstel en zelfvertrouwen.", color: "linear-gradient(135deg, #292238 0%, #36374e 100%)" },
  { tag: "Actualiteit", title: "Uitbreiding naar Tilburg met Hall of Fame", body: "Het collectief groeit. We starten repetities op een nieuwe locatie in Tilburg.", color: "linear-gradient(135deg, #36374e 0%, #4a3f6e 100%)" },
  { tag: "Samenwerking", title: "Nieuwe partnerships in de maak", body: "Gesprekken met The Transformers en Mystifiers over gedeelde doelstellingen.", color: "linear-gradient(135deg, #4a3f6e 0%, #8b83d4 100%)" },
];

export default function Blog() {
  return (
    <section className={`section ${styles.section}`} id="blog">
      <div className="container">
        <ScrollReveal><span className="section__label">Blog</span></ScrollReveal>
        <ScrollReveal delay={0.05}><h2 className="section__title">Verhalen uit<br />het collectief.</h2></ScrollReveal>
        <div className={styles.grid}>
          {posts.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <article className={styles.card}>
                <div className={styles.img} style={{ background: p.color }} />
                <div className={styles.body}>
                  <span className={styles.tag}>{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <a href="#" className={styles.link}>Lees meer →</a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
