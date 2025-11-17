import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bath, Wind } from "lucide-react";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";

const RoomShowcase = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room with Attached Bathroom",
      image: room1,
      attachedBathroom: true,
      ac: true,
      description: "Spacious and comfortable with modern amenities",
    },
    {
      id: 2,
      name: "Premium Room with Attached Bathroom",
      image: room2,
      attachedBathroom: true,
      ac: true,
      description: "Elegant room with natural lighting and cozy atmosphere",
    },
    {
      id: 3,
      name: "Standard Cozy Room",
      image: room3,
      attachedBathroom: false,
      ac: false,
      description: "Warm and inviting space perfect for peaceful stays",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Rooms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our thoughtfully designed rooms, each offering comfort and tranquility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground mb-4">{room.description}</p>
                
                <div className="flex gap-4 mb-4">
                  {room.attachedBathroom && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Bath className="w-4 h-4 text-primary" />
                      <span>Attached Bath</span>
                    </div>
                  )}
                  {room.ac && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Wind className="w-4 h-4 text-primary" />
                      <span>AC</span>
                    </div>
                  )}
                </div>

                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
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
