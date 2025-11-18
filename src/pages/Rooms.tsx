import { Button } from "@/components/ui/button";
import { Bath, Wind, Bed, Users, Cat } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room with Attached Bathroom",
      image: room1,
      attachedBathroom: true,
      ac: true,
      capacity: "2-3 guests",
      bedType: "Queen Bed",
      description:
        "Our Deluxe Room offers a perfect blend of comfort and luxury. Featuring a modern attached bathroom with hot water, air conditioning, and premium bedding. The room is designed with warm lighting and minimalist decor to ensure a peaceful stay.",
      amenities: [
        "Attached bathroom with hot water",
        "Air conditioning",
        "Premium bedding & linens",
        "Work desk & chair",
        "Wardrobe & storage",
        "Flat-screen TV",
      ],
    },
    {
      id: 2,
      name: "Premium Room with Attached Bathroom",
      image: room2,
      attachedBathroom: true,
      ac: true,
      capacity: "2-4 guests",
      bedType: "King Bed",
      description:
        "Experience ultimate comfort in our spacious Premium Room. With abundant natural light, elegant furnishings, and a luxurious attached bathroom, this room is perfect for families seeking extra space and premium amenities.",
      amenities: [
        "Spacious attached bathroom",
        "Air conditioning",
        "Large windows with natural light",
        "Seating area",
        "Premium bedding",
        "Study/work space",
      ],
    },
    {
      id: 3,
      name: "Standard Cozy Room",
      image: room3,
      attachedBathroom: false,
      ac: false,
      capacity: "1-2 guests",
      bedType: "Double Bed",
      description:
        "Our Standard Room provides a warm and cozy atmosphere perfect for a peaceful retreat. While this room uses a shared bathroom, it maintains all the comfort and cleanliness standards you'd expect. The warm lighting and thoughtful design create an inviting space.",
      amenities: [
        "Shared bathroom (clean & well-maintained)",
        "Natural ventilation with ceiling fan",
        "Comfortable bedding",
        "Wardrobe & storage",
        "Reading lights",
        "Peaceful & quiet",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Rooms & Accommodation in Guwahati | Alora Homestay - Deluxe & Premium Rooms"
        description="Explore our spacious rooms in Guwahati homestay. Deluxe rooms with attached bathroom, AC, premium bedding. Perfect for families. Book your comfortable stay at Alora Homestay Guwahati today!"
        keywords="rooms in guwahati homestay, deluxe room guwahati, homestay rooms guwahati, ac room guwahati, attached bathroom room guwahati, premium room guwahati, family room guwahati, homestay accommodation guwahati, budget room guwahati, comfortable room guwahati"
        canonical="/rooms"
      />
      <PageHeader
        title="Our Rooms"
        description="Choose from our selection of thoughtfully designed rooms, each crafted to provide comfort, peace, and a homely atmosphere for your stay in Guwahati."
        backgroundImage="/header2.webp"
      />

      {/* Rooms Detail Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`mb-20 last:mb-0 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-sm shadow-xl group">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">
                  {room.name}
                </h2>
                <p className="text-muted-foreground mb-6">{room.description}</p>

                {/* Room Info */}
                <div className="flex flex-wrap gap-6 mb-6">
                  {room.attachedBathroom && (
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Attached Bathroom</span>
                    </div>
                  )}
                  {room.ac && (
                    <div className="flex items-center gap-2">
                      <Wind className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Air Conditioned</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{room.bedType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{room.capacity}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h3 className="text-lg mb-3">Amenities</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {room.amenities.map((amenity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href={`https://api.whatsapp.com/send?phone=917099016525&text=${encodeURIComponent(`Hello! I'm interested in booking: ${room.name}. Please let me know about availability and pricing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-5 h-5 mr-2" />
                    Book This Room
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
     <CTASection />
    </div>
  );
};

export default Rooms;
