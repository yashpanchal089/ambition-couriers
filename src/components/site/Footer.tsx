import { Truck, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = ["Home", "About", "Services", "Features", "Partners", "Contact"];
const services = ["Domestic Shipping", "International Shipping", "Reverse Pickup", "Vehicle Transport", "Insurance"];

const Footer = () => {
  return (
    <footer className="bg-primary-deep text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto container-px">
        <div className="grid lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent grid place-items-center shadow-accent-glow">
                <Truck className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-base">Ambition</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60 font-semibold">
                  Couriers & Logistics
                </div>
              </div>
            </a>
            <p className="text-sm text-white/70 leading-relaxed">
              India's trusted technology-driven logistics platform. Ship smart, ship fast,
              ship with Ambition.
            </p>
            <div className="flex gap-2 mt-5">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 grid place-items-center hover:bg-accent transition-smooth">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display font-bold mb-4">Quick Links</div>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm text-white/70 hover:text-accent transition-smooth">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display font-bold mb-4">Services</div>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/70 hover:text-accent transition-smooth">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display font-bold mb-4">Get in Touch</div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                Goregaon East, Mumbai – 400063
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:9869765717" className="hover:text-accent">+91 98697 65717</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/70">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:ambitioncouriers.2015@gmail.com" className="hover:text-accent break-all">
                  ambitioncouriers.2015@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <div>© 2026 Ambition Couriers And Logistics. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
