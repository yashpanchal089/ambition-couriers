import { CheckCircle2, Target, Eye } from "lucide-react";
import aboutImg from "@/assets/about-warehouse.jpg";

const reasons = [
  "No commitment required — pay only for what you ship",
  "Dedicated 24/7 customer support team",
  "Cost-effective logistics solutions for SMBs & enterprises",
  "Industry-leading SLA with 99%+ on-time delivery",
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-premium border border-border">
              <img
                src={aboutImg}
                alt="Warehouse operations with technology"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-gradient-accent text-accent-foreground rounded-2xl shadow-accent-glow p-6 max-w-[220px]">
              <div className="font-display font-extrabold text-3xl">10+ Years</div>
              <div className="text-sm opacity-90">of trusted logistics expertise</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-soft border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
              About Us
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              India's Trusted Technology-Driven{" "}
              <span className="text-gradient-brand">Logistics Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ambition Couriers and Logistics is a Mumbai-based logistics platform that helps
              e-commerce businesses automate their shipping operations through a single-window
              system integrated with multiple courier partners.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-card border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-foreground mb-1">Our Mission</div>
                <p className="text-sm text-muted-foreground">
                  Make shipping effortless and affordable for every Indian business.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-card border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent grid place-items-center mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-foreground mb-1">Our Vision</div>
                <p className="text-sm text-muted-foreground">
                  Be India's most reliable single-window logistics platform.
                </p>
              </div>
            </div>

            <ul className="space-y-3 pt-2">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
