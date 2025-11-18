import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/hero-1.webp", "/hero-2.webp", "/hero-3.webp"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt={`Alora Home Stay - Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-heading text-white mb-6 animate-fade-in">
            Alora Home Stay
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            Homely & Luxury Feels — Your peaceful getaway in Guwahati, Assam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base"
            >
              <Link to="/rooms">View Rooms</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground text-base backdrop-blur-sm"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Mobile: bottom corners, Desktop: middle sides */}
      <button
        onClick={prevSlide}
        className="absolute left-4 bottom-20 md:left-4 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 md:p-3 rounded-full transition-all touch-manipulation"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 bottom-20 md:right-4 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2.5 md:p-3 rounded-full transition-all touch-manipulation"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all touch-manipulation ${
              index === currentSlide
                ? "bg-primary w-6 md:w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
