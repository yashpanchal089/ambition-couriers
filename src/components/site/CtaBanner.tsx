import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto container-px">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-accent p-10 lg:p-16 text-accent-foreground shadow-accent-glow">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1.5fr,1fr] gap-8 items-center">
            <div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Start Shipping Today.<br />
                Get Best Courier Rates Now.
              </h2>
              <p className="mt-4 text-white/90 text-lg max-w-xl">
                Join 10,000+ businesses that trust Ambition Couriers for fast, reliable, and affordable logistics.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="premium" size="xl" asChild>
                <a href="#contact">Get Started Now <ArrowRight className="w-5 h-5" /></a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="tel:9869765717"><Phone className="w-5 h-5" /> Talk to an Expert</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
