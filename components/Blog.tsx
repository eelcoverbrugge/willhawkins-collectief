import ScrollReveal from "./ScrollReveal";
import styles from "./Blog.module.css";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    tag: "Deelnemersverhaal",
    title: '"Muziek gaf me mijn stem terug"',
    body: "Een persoonlijk verhaal over hoe het spelen in een band bijdroeg aan herstel en zelfvertrouwen.",
    photo: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop",
  },
  {
    tag: "Actualiteit",
    title: "Uitbreiding naar Tilburg met Hall of Fame",
    body: "Het collectief groeit. We starten repetities op een nieuwe locatie in Tilburg.",
    photo: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=800&auto=format&fit=crop",
  },
  {
    tag: "Samenwerking",
    title: "Nieuwe partnerships in de maak",
    body: "Gesprekken met The Transformers en Mystifiers over gedeelde doelstellingen.",
    photo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop",
  },
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
                <div className={styles.img}>
                  <Image src={p.photo} alt={p.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.body}>
                  <span className={styles.tag}>{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <Link href="/blog" className={styles.link}>Lees meer →</Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
