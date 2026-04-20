import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919869765717?text=Hi%2C%20I%27m%20interested%20in%20Ambition%20Couriers%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-success text-white grid place-items-center shadow-premium hover:scale-110 transition-spring animate-pulse-glow"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent border-2 border-background" />
    </a>
  );
};

export default WhatsAppFloat;
