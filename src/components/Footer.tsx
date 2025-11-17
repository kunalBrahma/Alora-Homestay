import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Alora Home Stay" className="h-12 w-12" />
              <span className="text-xl font-bold">Alora Home Stay</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Experience homely comfort with a touch of luxury in the heart of Guwahati, Assam.
              Your peaceful family getaway awaits.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@alorahomestay.com" className="hover:text-primary transition-colors">
                  info@alorahomestay.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Guwahati, Assam, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-primary transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold mb-4">Our Policies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Family-friendly environment</li>
              <li>✓ No unmarried couples</li>
              <li>✓ Peaceful & safe neighborhood</li>
              <li>✓ Self-cooking facilities</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alora Home Stay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
