import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message: string;
  phoneNumber?: string;
  variant?: "primary" | "secondary" | "urgent" | "gold";
  children: React.ReactNode;
  className?: string;
}

export const WhatsAppButton = ({ 
  message, 
  phoneNumber = "1234567890", // Replace with actual WhatsApp number
  variant = "primary",
  children,
  className = ""
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    // Use the direct WhatsApp link
    const whatsappUrl = `https://wa.link/0cb4zp`;
    window.open(whatsappUrl, '_blank');
  };

  const variantClasses = {
    primary: "tech-gradient hover:opacity-90 text-primary-foreground tech-shadow transition-glass",
    secondary: "electric-gradient hover:opacity-90 text-secondary-foreground neon-glow transition-neon",
    urgent: "neon-gradient hover:opacity-90 text-urgent-foreground animate-pulse transition-neon",
    gold: "electric-gradient hover:opacity-90 text-secondary-foreground neon-glow transition-neon"
  };

  return (
    <Button
      onClick={handleClick}
      className={`${variantClasses[variant]} transition-smooth font-bebas text-lg tracking-wide px-8 py-6 h-auto ${className}`}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      {children}
    </Button>
  );
};