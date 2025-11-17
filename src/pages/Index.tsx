import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import RoomShowcase from "@/components/RoomShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Features />
      <RoomShowcase />
      <Footer />
    </div>
  );
};

export default Index;
