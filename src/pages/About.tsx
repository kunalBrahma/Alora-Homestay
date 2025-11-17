import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Home, Users, Coffee } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Hospitality",
      description: "We treat every guest as part of our family, ensuring comfort and care throughout your stay.",
    },
    {
      icon: Home,
      title: "Homely Comfort",
      description: "Experience the warmth of a home away from home with our thoughtfully designed spaces.",
    },
    {
      icon: Users,
      title: "Family-Friendly",
      description: "We create a safe, welcoming environment perfect for families and their precious moments.",
    },
    {
      icon: Coffee,
      title: "Peaceful Retreat",
      description: "Located in a tranquil neighborhood, offering the perfect escape from city chaos.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-warm-beige">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            About Alora Home Stay
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Where homely warmth meets modern comfort in the heart of Guwahati
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Welcome to <span className="text-primary font-semibold">Alora Home Stay</span>, 
                a sanctuary of comfort and tranquility nestled in the beautiful city of Guwahati, Assam. 
                Born from a vision to provide travelers with more than just accommodation, we created a space 
                that feels like home.
              </p>
              <p>
                At Alora, we believe that true hospitality comes from the heart. Our homestay isn't just about 
                providing a place to sleep—it's about creating an experience where families can bond, relax, and 
                create lasting memories in a peaceful environment. Every corner of our property has been designed 
                with warmth and care, reflecting our commitment to your comfort.
              </p>
              <p>
                Located in a serene residential neighborhood, Alora Home Stay offers the perfect blend of 
                accessibility and tranquility. Whether you're visiting Guwahati for leisure, family gatherings, 
                or a peaceful retreat, our home becomes your home, complete with all the amenities you need for 
                a comfortable stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-warm-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Explore Our Spaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group h-96">
              <img
                src={hero2}
                alt="Living Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Spacious Living Area</h3>
                  <p className="text-sm">Relax and unwind in our comfortable common spaces</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl group h-96">
              <img
                src={hero3}
                alt="Dining Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Elegant Dining Space</h3>
                  <p className="text-sm">Share meals and create memories together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-warm-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Philosophy
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Alora Home Stay, we believe that travel should enrich the soul. We've created a space where:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-card p-6 rounded-xl">
                <div className="text-3xl mb-3">🏡</div>
                <h3 className="font-bold mb-2">Comfort Meets Luxury</h3>
                <p className="text-sm text-muted-foreground">
                  Every detail is designed to make you feel at ease while enjoying premium amenities
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl">
                <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
                <h3 className="font-bold mb-2">Family First</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain a safe, respectful environment exclusively for families
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="font-bold mb-2">Peace & Serenity</h3>
                <p className="text-sm text-muted-foreground">
                  Located away from the hustle, offering you a tranquil escape
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
