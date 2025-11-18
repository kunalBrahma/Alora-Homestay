import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Navbar - z-50 */}
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
            <Link to="/" className="flex items-center space-x-3 z-50">
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
              <a
                href="https://api.whatsapp.com/send?phone=917099016525&text=Hello! I'm interested in booking a room at Alora Homestay. Please let me know about availability and pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors z-50 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop - z-9998 */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ touchAction: "none" }}
        />
      )}

      {/* Mobile Menu Sidebar - z-9999 (Highest) - Opens from LEFT */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-background z-[9999] md:hidden shadow-2xl transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <img
              src="/logo.svg"
              alt="Alora Home Stay Logo"
              className="h-16 w-16 object-contain"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-foreground hover:text-primary transition-colors rounded-lg"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`block py-4 px-6 text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-primary bg-muted border-l-4 border-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="p-4 border-t border-border">
            <a
              href="https://api.whatsapp.com/send?phone=917099016525&text=Hello! I'm interested in booking a room at Alora Homestay. Please let me know about availability and pricing."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-3 bg-primary text-primary-foreground rounded-md text-center font-medium hover:bg-primary/90 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;