import AboutSection from "../components/HomePage/AboutSection";
import AppointmentSection from "../components/HomePage/AppiontmentSection";
import BannerSection from "../components/HomePage/BannerSection";
import ContactSection from "../components/HomePage/ContactSection";
import FooterSection from "../components/HomePage/FooterSection";
import HeroSection from "../components/HomePage/HeroSection";
// import InteractiveCardSection from "../components/HomePage/InteractiveCardSection";
import ServiceSection from "../components/HomePage/ServiceSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import Navbar from "../components/Universal/NavBar";

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <HeroSection />
        <ServiceSection />
        <BannerSection />
        <AppointmentSection />
        <AboutSection />
        {/* <InteractiveCardSection /> */}
        <TestimonialSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default HomePage;
