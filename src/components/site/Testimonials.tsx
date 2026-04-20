import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Founder, UrbanThreads",
    text: "Switching to Ambition cut our shipping costs by 22% and our delivery times improved drastically. Their dashboard is a game-changer.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Head, GlowCart",
    text: "The NDR calling team has saved us thousands of failed deliveries. Truly the best logistics partner we've ever worked with.",
  },
  {
    name: "Aakash Iyer",
    role: "CEO, ShopWise India",
    text: "Single-window for 10+ couriers, zero subscription, and amazing support. This is what modern logistics should look like.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold uppercase tracking-wider mb-5">
            Testimonials
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Loved by{" "}
            <span className="text-gradient-brand">10,000+ Businesses</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-7 rounded-2xl bg-gradient-card border border-border shadow-sm hover:shadow-elegant hover:-translate-y-1 transition-spring"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-11 h-11 rounded-full bg-gradient-accent grid place-items-center text-accent-foreground font-display font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
