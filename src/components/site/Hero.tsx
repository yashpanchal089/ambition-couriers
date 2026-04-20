import { ArrowRight, MapPin, Package, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-logistics.jpg";

const highlights = [
  { icon: MapPin, label: "41,000+ Pin Codes" },
  { icon: Package, label: "Multi-Courier Integration" },
  { icon: Zap, label: "Automated Tracking" },
  { icon: ShieldCheck, label: "No Subscription Fees" },
];

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 lg:pt-32 pb-20 lg:pb-28 overflow-hidden bg-gradient-soft">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/10 blur-3xl" />
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto container-px relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="space-y-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-soft border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Mumbai-Based · PAN India Service
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-foreground">
              Smart Logistics{" "}
              <span className="text-gradient-brand">Solutions</span>
              <br />
              for Modern Businesses
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Ship faster, smarter, and more efficiently with{" "}
              <span className="font-semibold text-foreground">41,000+ serviceable pin codes</span> and
              India's leading courier partners all from one dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Get Started <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#track">Track Shipment</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 max-w-xl">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-smooth"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 grid place-items-center text-primary shrink-0">
                    <h.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{h.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-premium border border-border">
              <img
                src={heroImg}
                alt="Smart logistics fleet on highway"
                width={1920}
                height={1280}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="hidden sm:flex absolute -left-4 lg:-left-8 top-12 bg-card rounded-2xl shadow-elegant border border-border p-4 items-center gap-3 animate-float">
              <div className="w-11 h-11 rounded-xl bg-success/10 grid place-items-center">
                <Package className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Live Shipments</div>
                <div className="font-display font-bold text-lg text-foreground">12,480+</div>
              </div>
            </div>

            <div className="hidden sm:flex absolute -right-2 lg:-right-6 bottom-10 bg-card rounded-2xl shadow-elegant border border-border p-4 items-center gap-3 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="w-11 h-11 rounded-xl bg-accent/10 grid place-items-center">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">On-Time Delivery</div>
                <div className="font-display font-bold text-lg text-foreground">99.2%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-elegant">
          {[
            { v: "41K+", l: "Pin Codes Covered" },
            { v: "15+", l: "Courier Partners" },
            { v: "10K+", l: "Happy Clients" },
            { v: "24/7", l: "Customer Support" },
          ].map((s) => (
            <div key={s.l} className="bg-card p-6 lg:p-8 text-center">
              <div className="font-display font-extrabold text-3xl lg:text-4xl text-gradient-brand">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1 font-medium">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
