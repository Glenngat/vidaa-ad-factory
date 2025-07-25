import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/sample", label: "Get Sample" },
    { path: "/describe", label: "Get Quote" },
    { path: "/pricing", label: "Pricing" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-card backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/src/assets/mavidaa-logo.png" alt="Mavidaa" className="h-10 w-auto" />
            <span className="text-2xl font-bebas text-primary tracking-wider subtle-text-glow">MAVIDAA</span>
          </Link>
          
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
        </div>
      </div>
    </nav>
  );
};