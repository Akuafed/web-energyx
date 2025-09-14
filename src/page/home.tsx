import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import OurProduct from "../components/home/OurProduct";
import OurServices from "../components/home/OurService";
import OurClient from "../components/home/OurClient";

function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
        <AboutSection />
        <OurProduct />
        <OurServices />
        <OurClient />
      </section>
    </>
  );
}

export default Home;
