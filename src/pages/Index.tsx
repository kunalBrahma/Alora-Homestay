import HeroSection from "@/components/HeroSection";
import Features from "@/components/features-10";
import RoomShowcase from "@/components/RoomShowcase";
import ImageGallery from "@/components/ImageGallery";
import VideoShowcase from "@/components/VideoShowcase";
import AmenitiesSection from "@/components/content-5";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/testimonials";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="Best Homestay in Guwahati | Alora Homestay - Family-Friendly Accommodation"
        description="Alora Homestay - Best family-friendly homestay in Guwahati, Assam. Spacious rooms, fully furnished, 24/7 water, high-speed internet. Book your peaceful getaway today! Perfect for families looking for comfortable accommodation in Guwahati."
        keywords="best homestay in guwahati, homestay guwahati, family homestay guwahati, budget homestay guwahati, homestay near guwahati airport, homestay in assam, guwahati accommodation, family friendly homestay guwahati, affordable homestay guwahati, homestay with kitchen guwahati, best homestay near guwahati railway station, homestay guwahati with wifi, spacious homestay guwahati, fully furnished homestay guwahati"
        canonical="/"
      />
      <HeroSection />
      <Features />
      <RoomShowcase />
      <ImageGallery />
      {/* Optional: Video Showcase Section */}
      <VideoShowcase />
      <AmenitiesSection />
      <FAQ />
      <Testimonials />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default Index;
