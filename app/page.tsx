import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatementBand from "@/components/StatementBand";
import OverOns from "@/components/OverOns";
import WatWeDoen from "@/components/WatWeDoen";
import Deelnemers from "@/components/Deelnemers";
import Impact from "@/components/Impact";
import Partners from "@/components/Partners";
import Agenda from "@/components/Agenda";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StatementBand />
      <OverOns />
      <WatWeDoen />
      <Deelnemers />
      <Impact />
      <Partners />
      <Agenda />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
