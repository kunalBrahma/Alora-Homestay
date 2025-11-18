import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 70990 16525",
      link: "tel:+917099016525",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@alorahomestay.com",
      link: "mailto:info@alorahomestay.com",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Guwahati, Assam, India",
      link: "#",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: "Chat with us",
      link: "https://api.whatsapp.com/send?phone=917099016525",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for bookings, inquiries, or just to say hello! 
            <span className="block mt-2 text-sm md:text-base font-medium text-foreground">Note: We only accommodate families. Couples are not allowed to stay.</span>
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.link.startsWith("http") ? "_blank" : undefined}
              rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-card p-6 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <info.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg mb-2">{info.title}</h3>
              <p className="text-sm text-muted-foreground">{info.details}</p>
            </a>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm formId="home-contact-form" />
          </div>

          {/* Map */}
          <div>
            <h3 className="text-3xl md:text-5xl text-foreground mb-6">
              Our Location
            </h3>
            <div className="rounded-sm overflow-hidden shadow-lg h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.9804322331934!2d91.82583417609662!3d26.13218099319631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59180394d897%3A0x3c094d8dc0785265!2sAlora%20Homestay!5e0!3m2!1sen!2sin!4v1763450183840!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alora Home Stay Location"
              />
            </div>
            <div className="mt-6 p-6 bg-card rounded-sm">
              <h4 className="text-lg mb-3 font-medium">Visit Us</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Alora Home Stay is located in a peaceful residential area of Guwahati, 
                Assam. Our homestay is easily accessible from major city landmarks and 
                transportation hubs.
              </p>
              <a
                href="https://maps.google.com/?q=Alora+Homestay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

