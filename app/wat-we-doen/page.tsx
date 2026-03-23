import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = { title: "Wat We Doen — Will Hawkins Collectief" };

const diensten = [
  { num: "01", title: "Podium bieden", body: "We organiseren optredens en presentaties waarbij deelnemers hun muzikaal en theatraal talent voor een breed publiek kunnen tonen. Van intieme zaaloptredens tot grote festivals.", photo: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop" },
  { num: "02", title: "Talent faciliteren", body: "Van repetitieruimte tot professionele bandcoaching — we bieden de infrastructuur en begeleiding die deelnemers nodig hebben om te groeien. Repetities in Eindhoven, Vught en Tilburg.", photo: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&auto=format&fit=crop" },
  { num: "03", title: "Verbinden", body: "We koppelen deelnemers aan professionele artiesten, culturele instellingen en de zorgsector. Die verbinding leidt tot wederzijds begrip en opheffing van stigma.", photo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop" },
  { num: "04", title: "Maatschappelijke impact", body: "Door de kracht van culturele boodschappen bereiken we het algemeen publiek met nieuwe opvattingen over herstel, veerkracht en talent in het sociaal domein.", photo: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop" },
];

export default function WatWeDoenPage() {
  return (
    <>
      <Nav />
      <PageHero
        label="Wat we doen"
        title="Podium.<br/>Verbinding.<br/>Ontwikkeling."
        subtitle="Vier pijlers die samen zorgen voor duurzame impact — voor de deelnemers en voor de samenleving."
        photo="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&auto=format&fit=crop"
      />

      {/* Diensten */}
      <section className={`section ${styles.diensten}`}>
        <div className="container">
          {diensten.map((d, i) => (
            <ScrollReveal key={d.num}>
              <div className={`${styles.dienst} ${i % 2 === 1 ? styles.dienstReverse : ""}`}>
                <div className={styles.dienstPhoto}>
                  <Image src={d.photo} alt={d.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.dienstText}>
                  <span className={styles.dienstNum}>{d.num}</span>
                  <h2>{d.title}</h2>
                  <p>{d.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Werkwijze */}
      <section className={`section ${styles.werkwijze}`}>
        <div className="container">
          <ScrollReveal><span className="section__label">Onze werkwijze</span></ScrollReveal>
          <ScrollReveal delay={0.05}><h2 className="section__title" style={{ color: "white" }}>Van instroom<br/>tot zelfstandigheid.</h2></ScrollReveal>
          <div className={styles.stappen}>
            {[
              { n: "1", t: "Instroom", b: "Nieuwe leden worden begeleid via aparte repetities o.l.v. een coach." },
              { n: "2", t: "Groei", b: "Stap voor stap leren samenspelen, eigen songs schrijven en optreden." },
              { n: "3", t: "Podium", b: "Optredens voor breed publiek, van poppodium tot zorgsector congressen." },
              { n: "4", t: "Zelfstandigheid", b: "Bands ontwikkelen een eigen naam, identiteit en artistieke koers." },
            ].map((s, i) => (
              <ScrollReveal key={s.n} direction="scale" delay={i * 0.1}>
                <div className={styles.stap}>
                  <span className={styles.stapNum}>{s.n}</span>
                  <h3>{s.t}</h3>
                  <p>{s.b}</p>
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
