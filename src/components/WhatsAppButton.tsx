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
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const variantClasses = {
    primary: "bg-primary hover:bg-primary/90 text-primary-foreground hero-shadow",
    secondary: "gold-gradient hover:opacity-90 text-secondary-foreground glow-shadow",
    urgent: "urgent-gradient hover:opacity-90 text-urgent-foreground animate-pulse",
    gold: "gold-gradient hover:opacity-90 text-secondary-foreground glow-shadow"
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