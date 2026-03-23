import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Blog — Will Hawkins Collectief" };

const posts = [
  { tag: "Deelnemersverhaal", title: '"Muziek gaf me mijn stem terug"', excerpt: "Een persoonlijk verhaal over hoe het spelen in een band bijdroeg aan herstel en zelfvertrouwen. Over durven falen, durven groeien.", photo: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop", date: "15 maart 2025" },
  { tag: "Actualiteit", title: "Uitbreiding naar Tilburg met Hall of Fame", excerpt: "Het collectief groeit. We starten binnenkort repetities op een nieuwe locatie in Tilburg. Hall of Fame wordt onze derde thuis.", photo: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=800&auto=format&fit=crop", date: "8 maart 2025" },
  { tag: "Samenwerking", title: "Nieuwe partnerships in de maak", excerpt: "Gesprekken met The Transformers (Rotterdam) en Mystifiers (Amsterdam) over gedeelde doelstellingen en gezamenlijke projecten.", photo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop", date: "1 maart 2025" },
  { tag: "Deelnemersverhaal", title: "Van dagbehandeling naar het podium", excerpt: "Hoe een jaar meedoen in de Startersband bijdroeg aan zijn herstelproces. Een openhartig gesprek met een van onze muzikanten.", photo: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&auto=format&fit=crop", date: "22 februari 2025" },
  { tag: "Nieuws", title: "Subsidie verlengd door Serra Foundation", excerpt: "Goed nieuws: de Serra Foundation heeft onze subsidie verlengd. Dit betekent continuïteit voor alle lopende projecten.", photo: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop", date: "14 februari 2025" },
  { tag: "Optreden", title: "Terugblik: B.O.F. Festival 2024", excerpt: "Een prachtige avond op het B.O.F. Festival in Eindhoven. Jesus and the Fishsticks speelden voor hun grootste publiek ooit.", photo: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop", date: "5 oktober 2024" },
];

export default function BlogPage() {
  return (
    <>
      <Nav />
      <PageHero
        label="Blog"
        title="Verhalen uit<br/>het collectief."
        subtitle="Persoonlijke verhalen, actualiteiten en terugblikken — rechtstreeks uit de gemeenschap."
        photo="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&auto=format&fit=crop"
      />

      <section className={`section ${styles.blog}`}>
        <div className="container">
          <div className={styles.grid}>
            {posts.map((p, i) => (
              <ScrollReveal key={p.title} delay={(i % 3) * 0.1}>
                <article className={styles.card}>
                  <div className={styles.img}>
                    <Image src={p.photo} alt={p.title} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className={styles.body}>
                    <div className={styles.meta}>
                      <span className={styles.tag}>{p.tag}</span>
                      <span className={styles.date}>{p.date}</span>
                    </div>
                    <h2>{p.title}</h2>
                    <p>{p.excerpt}</p>
                    <Link href="#" className={styles.link}>Lees meer →</Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
