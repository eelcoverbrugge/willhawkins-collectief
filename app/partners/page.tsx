import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = { title: "Partners — Will Hawkins Collectief" };

const partners = [
  { type: "Subsidiegever", name: "Serra Foundation", body: "Een fonds dat groepen ondersteunt die aandacht en ondersteuning nodig hebben op het gebied van gezond leven, psychosociaal welzijn en toegang tot cultuur. Serra is onze eerste grote subsidiegever.", url: "#" },
  { type: "Partner · Muziek", name: "Popei Poppodium", body: "Een pand vol faciliteiten, interessante mensen uit de muziekindustrie, repetitieruimtes en een poppodium voor live performances in Eindhoven. Cruciaal voor onze infrastructuur.", url: "#" },
  { type: "Partner · Zorg", name: "Novadic-Kentron", body: "Verslavingszorginstelling met muziekinstrumenten en herstelprogramma's, ondersteund onder het motto: 'Niet de verslaving klein maken, maar mensen groter.'", url: "#" },
  { type: "Partner · Tilburg", name: "Hall of Fame", body: "Onze nieuwe locatie in Tilburg waar we binnenkort repetities starten voor nieuwe leden. Een broedplaats voor talenten in Midden-Brabant.", url: "#" },
  { type: "Nationaal netwerk", name: "The Transformers", body: "Rotterdam-based organisatie met een duidelijke verbinding met het thema thuisloosheid en stadscultuur. We verkennen gezamenlijke doelstellingen.", url: "#" },
  { type: "Nationaal netwerk", name: "Mystifiers", body: "Amsterdam-based partner met vergelijkbare aanpak. Samen werken we aan het overbruggen van de kloof tussen de professionele muziekindustrie en de sociale sector.", url: "#" },
];

const klanten = [
  "Café Wilhelmina", "Theater De Boemel", "Popei Poppodium", "B.O.F. Festival",
  "VNG — Vereniging Nederlandse Gemeenten", "Zorgsector congressen",
];

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <PageHero
        label="Partners"
        title="Samen<br/>sterker."
        subtitle="We bouwen aan een versterkende structuur van partnerships die onze maatschappelijke doelstelling dragen."
        photo="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&auto=format&fit=crop"
      />

      <section className={`section ${styles.partners}`}>
        <div className="container">
          <ScrollReveal><span className="section__label">Onze partners</span></ScrollReveal>
          <ScrollReveal delay={0.05}><h2 className="section__title">Wie ons dragen.</h2></ScrollReveal>
          <div className={styles.grid}>
            {partners.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.07}>
                <div className={styles.card}>
                  <span className={styles.type}>{p.type}</span>
                  <h3>{p.name}</h3>
                  <p>{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.klanten}`}>
        <div className="container">
          <ScrollReveal><span className="section__label">Klanten & venues</span></ScrollReveal>
          <ScrollReveal delay={0.05}><h2 className="section__title">Waar we<br/>optraden.</h2></ScrollReveal>
          <div className={styles.klantenGrid}>
            {klanten.map((k, i) => (
              <ScrollReveal key={k} delay={i * 0.06}>
                <div className={styles.klantenItem}>{k}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className="container">
          <ScrollReveal direction="scale">
            <div className={styles.ctaBox}>
              <h2>Word partner</h2>
              <p>Ben je een culturele instelling of zorgsector partner en wil je samenwerken? We zijn altijd op zoek naar nieuwe verbindingen die onze doelstelling versterken.</p>
              <Link href="/contact" className="btn btn--primary">Neem contact op</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
