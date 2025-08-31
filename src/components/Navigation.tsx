import { Link, useLocation } from "react-router-dom";
import { LogoProcessor } from "./LogoProcessor";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/sample", label: "Get Sample" },
    { path: "/describe", label: "Get Quote" },
    { path: "/pricing", label: "Pricing" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 glass-card backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/7f171536-c30f-4080-b96b-78b91e469f74.png"
              alt="Mavidaa"
              className="h-10 w-auto object-contain"
            />
            <span className="text-2xl font-bebas text-primary tracking-wider subtle-text-glow">MAVIDAA</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-roboto font-medium transition-glass hover:text-primary hover:subtle-text-glow ${
                  location.pathname === item.path 
                    ? "text-primary subtle-text-glow" 
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 glass-card text-primary hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden mt-4 pb-4 glass-card rounded-lg border border-primary/20 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-roboto font-medium p-3 rounded-lg transition-glass hover:text-primary hover:subtle-text-glow hover:bg-primary/10 ${
                    location.pathname === item.path 
                      ? "text-primary subtle-text-glow bg-primary/10" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};