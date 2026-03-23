import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata = { title: "Contact — Will Hawkins Collectief" };

export default function ContactPage() {
  return (
    <>
      <Nav />
      <PageHero
        label="Contact"
        title="Laten we<br/>kennismaken."
        subtitle="Ben je een culturele instelling, zorgsector partner, of wil je deelnemen? We horen graag van je."
        photo="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1600&auto=format&fit=crop"
      />
      <Contact />
      <Footer />
    </>
  );
}
