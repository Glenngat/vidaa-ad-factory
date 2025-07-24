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
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bebas text-accent tracking-wider">
            MAVIDAA
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-roboto font-medium transition-smooth hover:text-accent ${
                  location.pathname === item.path 
                    ? "text-accent" 
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