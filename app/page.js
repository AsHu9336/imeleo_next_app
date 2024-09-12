import HeroSection from "@/Components/HeroSection";
import Services from "@/Components/Services";
import Solutions from "@/Components/Solutions";
import WhyContactUs from "@/Components/WhyContactUs";
import Founder from "@/Components/Founder";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Solutions/>
      <Services/>
      <About/>
      <Founder/>
      <WhyContactUs/>
      <Contact/>
      <Footer/>
     
    </>
  );
}
