import { Plane, Globe2, RotateCcw, MapPinned, Car, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Plane,
    title: "Domestic Shipping",
    desc: "Fast Air, Train & Road shipping across 41,000+ pin codes in India.",
    tag: "Most Popular",
  },
  {
    icon: Globe2,
    title: "International Shipping",
    desc: "Reliable cross-border delivery to 220+ countries through trusted partners.",
  },
  {
    icon: RotateCcw,
    title: "Reverse Pickup",
    desc: "Hassle-free reverse logistics for e-commerce returns and exchanges.",
  },
  {
    icon: MapPinned,
    title: "Multi-Location Pickup",
    desc: "Schedule pickups from multiple warehouses or store locations seamlessly.",
  },
  {
    icon: Car,
    title: "Vehicle Transportation",
    desc: "Safe end-to-end vehicle transport solutions PAN India with insurance.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Services",
    desc: "Vehicle, life & shipment insurance with up to 35% discounts.",
    tag: "Up to 35% Off",
  },
];

const insurers = [
  "LIC", "HDFC Life", "SBI Life", "ICICI Pru", "Kotak Life",
  "Bajaj Allianz", "Tata AIA", "Aditya Birla", "Max Life", "Reliance",
  "Aviva", "Edelweiss", "Canara HSBC", "Star Union",
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container mx-auto container-px">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            Our Services
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Complete Logistics Solutions{" "}
            <span className="text-gradient-accent">Under One Roof</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            From domestic shipping to international delivery, vehicle transportation to insurance —
            we've got every business need covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-7 rounded-2xl bg-card border border-border shadow-sm hover:shadow-elegant hover:-translate-y-1 transition-spring overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-accent/10 transition-smooth" />
              {s.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-accent text-accent-foreground">
                  {s.tag}
                </span>
              )}
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground shadow-md mb-5 group-hover:scale-110 transition-spring">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4 group-hover:text-accent transition-smooth">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </a>
            </div>
          ))}
        </div>

        {/* Insurance partners */}
        <div className="mt-16 lg:mt-20 p-8 lg:p-10 rounded-3xl bg-gradient-hero text-primary-foreground shadow-premium relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr,2fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider mb-4">
                10% – 35% Discount
              </div>
              <h3 className="font-display font-extrabold text-2xl lg:text-3xl mb-3">
                Trusted Insurance Partners
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Save big on Vehicle (1st & 3rd party) and Life Insurance through our network of
                India's top insurers.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {insurers.map((i) => (
                <div key={i} className="px-3 py-2.5 rounded-lg bg-white/10 backdrop-blur border border-white/15 text-center text-sm font-semibold hover:bg-white/20 transition-smooth">
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <Button variant="cta" size="lg" asChild>
              <a href="#contact">Get Insurance Quote <ArrowRight className="w-4 h-4" /></a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#contact">Talk to Expert</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
