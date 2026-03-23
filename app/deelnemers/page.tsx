import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = { title: "Deelnemers — Will Hawkins Collectief" };

export default function DeelnemersPage() {
  return (
    <>
      <Nav />
      <PageHero
        label="Deelnemers"
        title="Drie fasen,<br/>één gemeenschap."
        subtitle="Iedereen begint ergens. We begeleiden nieuwe leden stap voor stap naar groei, zelfvertrouwen en het podium."
        photo="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&auto=format&fit=crop"
      />

      {/* Bands */}
      <section className={`section ${styles.bands}`}>
        <div className="container">
          <ScrollReveal><span className="section__label">De bands</span></ScrollReveal>
          <ScrollReveal delay={0.05}><h2 className="section__title">Actieve groepen.</h2></ScrollReveal>

          <ScrollReveal>
            <div className={styles.bandFeatured}>
              <div className={styles.bandInfo}>
                <span className={styles.phase}>Fase 1 · Gevorderd</span>
                <h2>Jesus and<br />the Fishsticks</h2>
                <p>De meer ervaren muzikanten hebben een eigen naam en identiteit ontwikkeld. Ze schrijven eigen songs, treden op voor publiek en werken toe naar ondersteunde zelfstandigheid. De band is het bewijs dat herstel en artistieke groei hand in hand gaan.</p>
                <p>Optredens: Popei Eindhoven, B.O.F. Festival, Zorgsector congressen.</p>
                <span className={styles.tag}>Live optredens</span>
              </div>
              <div className={styles.bandPhotoWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=800&auto=format&fit=crop" alt="Band performing" />
              </div>
            </div>
          </ScrollReveal>

          <div className={styles.bandsGrid}>
            <ScrollReveal delay={0.05}>
              <div className={styles.bandCard}>
                <span className={styles.phase}>Fase 2 · Startersband</span>
                <h3>De Startersband</h3>
                <p>Aan het leren een band te vormen, samen te spelen en eigen songs te schrijven. Ondersteund door ervaren deelnemers en een professionele bandcoach. Op zoek naar aanvulling — o.a. een gitarist.</p>
                <span className={styles.tag}>In ontwikkeling</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={styles.bandCard}>
                <span className={styles.phase}>Fase 3 · Instroom</span>
                <h3>Nieuwe leden</h3>
                <p>Aparte repetities o.l.v. coach Diewertje begeleiden nieuwelingen stap voor stap richting deelname aan de grotere groep. Repetities in Eindhoven, Vught en binnenkort ook Tilburg (Hall of Fame).</p>
                <span className={styles.tag}>Instroom begeleiding</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Meedoen CTA */}
      <section className={`section ${styles.meedoen}`}>
        <div className="container">
          <ScrollReveal direction="scale">
            <div className={styles.ctaBox}>
              <h2>Wil jij meedoen?</h2>
              <p>Heb jij een muzikaal of theatraal talent en wil je dit ontwikkelen in een veilige, ondersteunende omgeving? Neem contact op — de deur staat open.</p>
              <Link href="/contact" className="btn btn--primary">Neem contact op</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
