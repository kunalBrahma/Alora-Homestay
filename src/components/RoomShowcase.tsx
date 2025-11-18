import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bath, Wind } from "lucide-react";

const RoomShowcase = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room with Attached Bathroom",
      image: "/1.webp",
      attachedBathroom: true,
      ac: true,
      description: "Spacious and comfortable with modern amenities",
    },
    {
      id: 2,
      name: "Premium Room with Attached Bathroom",
      image: "/2.webp",
      attachedBathroom: true,
      ac: true,
      description: "Elegant room with natural lighting and cozy atmosphere",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-foreground mb-4">
            Our Rooms
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our thoughtfully designed rooms, each offering comfort and tranquility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm group"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Text overlay in bottom right */}
              <div className="absolute bottom-0 right-0 p-6 md:p-8 text-right">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  {room.name}
                </h3>
                <p className="text-white/90 mb-4 max-w-md ml-auto">
                  {room.description}
                </p>
                
                <div className="flex gap-4 mb-4 justify-end">
                  {room.attachedBathroom && (
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <Bath className="w-4 h-4 text-white" />
                      <span>Attached Bath</span>
                    </div>
                  )}
                  {room.ac && (
                    <div className="flex items-center gap-2 text-sm text-white/90">
                      <Wind className="w-4 h-4 text-white" />
                      <span>AC</span>
                    </div>
                  )}
                </div>

                <Button
                  asChild
                  className="bg-white text-foreground hover:bg-white/90"
                >
                  <Link to="/rooms">View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="/rooms">View All Rooms</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;
