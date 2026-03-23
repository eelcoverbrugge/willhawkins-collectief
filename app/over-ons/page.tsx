import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = { title: "Over Ons — Will Hawkins Collectief" };

const team = [
  { name: "Will Hawkins", role: "Oprichter & Artistiek Directeur", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop" },
  { name: "Diewertje van der Berg", role: "Bandcoach & Begeleider instroom", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop" },
  { name: "Marc de Vries", role: "Muzikant & Mentor", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop" },
];

export default function OverOnsPage() {
  return (
    <>
      <Nav />
      <PageHero
        label="Over ons"
        title="Ieder mens<br/>heeft talent."
        subtitle="We geloven dat talent geen uitzondering is. Het collectief biedt mensen in herstel een plek om te groeien, te shinen en te worden gezien."
        photo="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1600&auto=format&fit=crop"
      />

      {/* Verhaal */}
      <section className={`section ${styles.story}`}>
        <div className={`container ${styles.storyInner}`}>
          <div>
            <ScrollReveal><span className="section__label">Ons verhaal</span></ScrollReveal>
            <ScrollReveal delay={0.05}><h2 className="section__title">Waarom het<br/>collectief bestaat.</h2></ScrollReveal>
            <ScrollReveal delay={0.1}><p>Het Will Hawkins Collectief ontstond vanuit de overtuiging dat mensen met een verslavingsachtergrond of GGZ-achtergrond recht hebben op erkenning en steun. Stigmatisering is een groot obstakel — en kunst is een krachtig middel om die muur te slechten.</p></ScrollReveal>
            <ScrollReveal delay={0.15}><p>Door een podium te bieden snijdt het mes aan twee kanten: een breed publiek raakt betrokken bij een maatschappelijk vraagstuk, terwijl deelnemers werken aan hun persoonlijke uitdaging en toekomst.</p></ScrollReveal>
            <ScrollReveal delay={0.2}><p>Professionals zijn bij ons dienend en op de achtergrond. Alleen de doelgroep staat op het podium — want dat is de sterkste bekrachtiging van hun talent en onafhankelijkheid.</p></ScrollReveal>
          </div>
          <ScrollReveal direction="scale" delay={0.1}>
            <div className={styles.photoBlock}>
              <Image src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop" alt="Band rehearsal" fill style={{ objectFit: "cover" }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Missie + Visie */}
      <section className={`section ${styles.mvSection}`}>
        <div className="container">
          <div className={styles.mvGrid}>
            <ScrollReveal>
              <div className={styles.mvCard}>
                <h3>Missie</h3>
                <p>Mensen in herstel van verslaving of een GGZ-achtergrond in hun kracht zetten door aanwezige talenten te helpen ontdekken, te helpen ontwikkelen, te presenteren en te laten ervaren.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={styles.mvCard}>
                <h3>Visie</h3>
                <p>Mensen met verslaving en/of psychische problemen helpen, doormiddel van muziek en theater, door ze weer te laten participeren in de maatschappij op een gewaardeerde en betekenisvolle manier.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={`${styles.mvCard} ${styles.mvCardDark}`}>
                <h3>Slogan</h3>
                <p className={styles.slogan}>&ldquo;Kans voor Talent&rdquo;</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <ScrollReveal><span className="section__label">Het team</span></ScrollReveal>
          <ScrollReveal delay={0.05}><h2 className="section__title">De mensen<br/>achter het collectief.</h2></ScrollReveal>
          <div className={styles.teamGrid}>
            {team.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 0.1}>
                <div className={styles.teamCard}>
                  <div className={styles.teamPhoto}>
                    <Image src={m.photo} alt={m.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Doelen */}
      <section className={`section ${styles.goalsSection}`}>
        <div className="container">
          <ScrollReveal><span className="section__label">Onze doelen</span></ScrollReveal>
          <ScrollReveal delay={0.05}><h2 className="section__title" style={{ color: "white" }}>Waar we<br/>naartoe werken.</h2></ScrollReveal>
          <div className={styles.goalsGrid}>
            {[
              { year: "1 jaar", goal: "Meerjarige financiering vinden voor projecten." },
              { year: "3 jaar", goal: "Bouwen aan een versterkende structuur van partnerships voor onze doelstelling." },
              { year: "5 jaar", goal: "WH Collectief wordt gedragen door de samenleving als maatschappelijk relevant." },
            ].map((g, i) => (
              <ScrollReveal key={g.year} delay={i * 0.1}>
                <div className={styles.goalCard}>
                  <span className={styles.goalYear}>{g.year}</span>
                  <p>{g.goal}</p>
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
