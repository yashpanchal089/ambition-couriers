const partners = [
  "FedEx", "Blue Dart", "DTDC", "DHL", "Delhivery", "XpressBees",
  "Ecom Express", "Aramex", "Spoton", "Shree Nandan", "Professional Couriers", "Trackon",
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-gradient-soft overflow-hidden">
      <div className="container mx-auto container-px">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            Courier Partners
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Powered by India's{" "}
            <span className="text-gradient-brand">Leading Couriers</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Integrated with top courier partners to deliver speed, reliability, and the best rates.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-4 animate-marquee">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="shrink-0 px-8 py-6 rounded-2xl bg-card border border-border shadow-sm min-w-[200px] grid place-items-center hover:shadow-md hover:-translate-y-1 transition-spring"
              >
                <span className="font-display font-bold text-lg text-foreground/80">{p}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          ...and many more courier integrations available.
        </p>
      </div>
    </section>
  );
};

export default Partners;
