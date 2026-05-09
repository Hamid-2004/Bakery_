import AboutSection from "./components/AboutSection";
import CustomOrderSection from "./components/CustomOrderSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InstagramGallery from "./components/InstagramGallery";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import TestimonialSlider from "./components/TestimonialSlider";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-espresso">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductGrid />
        <AboutSection />
        <InstagramGallery />
        <TestimonialSlider />
        <CustomOrderSection />
      </main>
      <Footer />
    </div>
  );
}
