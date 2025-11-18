import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-sm overflow-hidden order-2 lg:order-1"
          >
            <img
              src="/image-5.webp"
              alt="Alora Home Stay - Your perfect getaway"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-3xl md:text-5xl text-foreground mb-3 sm:mb-4">
                Ready to Experience Alora?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Book your stay today and discover the perfect blend of comfort, 
                tranquility, and authentic Assamese hospitality in the heart of Guwahati.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-foreground font-medium">
                Contact us now to reserve your room:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  size="default"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 text-sm sm:text-base h-10 sm:h-11 md:h-12 w-full sm:w-auto"
                >
                  <a href="tel:+917099016525" className="flex items-center justify-center">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="default"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1 text-sm sm:text-base h-10 sm:h-11 md:h-12 w-full sm:w-auto"
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=917099016525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-border">
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  Or fill out our contact form above to send us a message
                </p>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary hover:bg-primary/10 text-xs sm:text-sm h-8 sm:h-9 md:h-10"
                >
                  <a href="/contact">Go to Contact Form</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

