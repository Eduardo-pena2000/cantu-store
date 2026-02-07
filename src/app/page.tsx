import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ParallaxBanner from "@/components/ParallaxBanner";
import PremiumCutsTeaser from "@/components/PremiumCutsTeaser";
import ProcessSteps from "@/components/ProcessSteps";
import GrillingTips from "@/components/GrillingTips"; // New
import BrandVideo from "@/components/BrandVideo"; // New
import LocationMap from "@/components/LocationMap";
import Newsletter from "@/components/Newsletter"; // New
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <ParallaxBanner />
      <PremiumCutsTeaser />
      <ProcessSteps />
      <GrillingTips /> {/* Educational content */}
      <BrandVideo /> {/* Emotional content */}
      <LocationMap />
      <Newsletter /> {/* Capture lead before footer */}
      <Footer />
    </main>
  );
}
