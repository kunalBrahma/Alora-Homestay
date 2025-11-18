import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.svg"
              alt="Alora Home Stay Logo"
              className="h-20 w-20 object-contain"
            />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary"
                    : isScrolled
                    ? "text-foreground"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href="https://api.whatsapp.com/send?phone=917099016525&text=Hello! I'm interested in booking a room at Alora Homestay. Please let me know about availability and pricing."
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Sidebar */}
            <div className="fixed top-0 left-0 h-full w-[80%] bg-background z-50 md:hidden shadow-2xl animate-slide-in-left">
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-4 border-b">
                  <img
                    src="/logo.svg"
                    alt="Alora Home Stay Logo"
                    className="h-12 w-12 object-contain"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-foreground hover:text-primary transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-4 px-6 text-base font-medium transition-colors ${
                        isActive(link.path)
                          ? "text-primary bg-muted border-l-4 border-primary"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                {/* Book Now Button */}
                <div className="p-4 border-t">
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a
                      href="https://api.whatsapp.com/send?phone=917099016525&text=Hello! I'm interested in booking a room at Alora Homestay. Please let me know about availability and pricing."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
