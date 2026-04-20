import { Bot, Activity, MessageSquare, PhoneCall, Palette, BadgeDollarSign } from "lucide-react";

const features = [
  { icon: Bot, title: "Automated Courier Assignment", desc: "AI picks the best partner for each shipment based on speed, cost, and pin code." },
  { icon: Activity, title: "Real-Time Tracking", desc: "Live shipment tracking with status updates from pickup to delivery." },
  { icon: MessageSquare, title: "SMS Notifications", desc: "Auto-trigger SMS alerts at every stage to keep customers informed." },
  { icon: PhoneCall, title: "NDR Calling Support", desc: "Dedicated team handles non-delivery cases to maximize successful delivery." },
  { icon: Palette, title: "Custom Branded Tracking", desc: "White-label tracking page with your brand colors, logo, and domain." },
  { icon: BadgeDollarSign, title: "No Subscription Charges", desc: "Pay-as-you-ship pricing model. Zero hidden fees, zero monthly cost." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold uppercase tracking-wider mb-5">
            Platform Features
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Everything You Need to{" "}
            <span className="text-gradient-brand">Scale Shipping</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            A powerful logistics suite built for modern e-commerce — automated, transparent, and effortless.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden shadow-elegant">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group bg-card p-8 hover:bg-gradient-card transition-smooth"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5 group-hover:bg-gradient-accent group-hover:text-accent-foreground group-hover:scale-110 transition-spring">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
