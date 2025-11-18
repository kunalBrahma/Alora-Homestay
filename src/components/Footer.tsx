import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer 
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: "url('/hero-5.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.svg" alt="Alora Home Stay" className="h-16 w-16 sm:h-20 sm:w-20" />
              <span className="text-xl sm:text-2xl font-bold text-white">Alora Home Stay</span>
            </div>
            <p className="text-sm sm:text-base text-white/90 mb-6 max-w-md">
              Experience homely comfort with a touch of luxury in the heart of Guwahati, Assam.
              Your peaceful family getaway awaits.
            </p>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="tel:+917099016525" className="text-white/90 hover:text-primary transition-colors">
                  +91 70990 16525
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@alorahomestay.com" className="text-white/90 hover:text-primary transition-colors">
                  info@alorahomestay.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="text-white/90">Guwahati, Assam, India</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a 
                  href="https://api.whatsapp.com/send?phone=917099016525" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-primary transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 sm:mb-6 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link to="/" className="text-white/90 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-white/90 hover:text-primary transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/90 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="mb-4 sm:mb-6 text-lg font-semibold text-white">Policies</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link to="/privacy-policy" className="text-white/90 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-white/90 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/cancellation-policy" className="text-white/90 hover:text-primary transition-colors">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/20">
              <h5 className="text-sm font-semibold text-white mb-3">Our Standards</h5>
              <ul className="space-y-2 text-xs sm:text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Family-friendly environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>No unmarried couples</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Peaceful & safe neighborhood</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 py-6 md:py-0">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base">
            <p className="text-white/80">
              &copy; {new Date().getFullYear()} Alora Home Stay. All rights reserved.
            </p>
            <p className="text-white/80">
              Design by{" "}
              <a 
                href="https://sitemakerlab.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                sitemakerlab
              </a>
            </p>
          </div>
        </div>

        {/* Mobile Fixed Action Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 shadow-lg border-t border-white/10">
          <div className="flex items-center bg-background/95 backdrop-blur-sm">
            <a 
              href="https://api.whatsapp.com/send?phone=917099016525" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1DA851] text-white font-semibold py-4 transition-colors duration-200"
            >
              <FaWhatsapp size={22} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <div className="w-px h-8 bg-border opacity-20" />
            <a 
              href="tel:+917099016525" 
              className="flex flex-1 items-center justify-center gap-2 bg-primary hover:bg-foreground/90 active:bg-foreground/80 text-background font-semibold py-4 transition-colors duration-200"
            >
              <FaPhone size={20} />
              <span className="text-sm font-medium">Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
