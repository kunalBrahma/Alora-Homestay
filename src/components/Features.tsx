import { ChefHat, Home, Utensils, Wifi, Leaf, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Self Cooking",
      description: "Fully equipped kitchen for your convenience",
    },
    {
      icon: Home,
      title: "Spacious Hall",
      description: "Common living area for relaxation",
    },
    {
      icon: Utensils,
      title: "Dining Hall",
      description: "Comfortable dining space for families",
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "High-speed internet throughout",
    },
    {
      icon: Leaf,
      title: "Peaceful Environment",
      description: "Tranquil residential neighborhood",
    },
    {
      icon: Users,
      title: "Family-Friendly",
      description: "Only for families - unmarried couples not allowed",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-foreground mb-4">
            Why Choose Alora?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of homely comfort and modern amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
