import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I get started with Ambition Couriers?",
    a: "Simply contact our team via the form, phone, or WhatsApp. We'll set you up with a customized shipping plan within 24 hours — no commitments, no subscription fees.",
  },
  {
    q: "Which courier partners do you work with?",
    a: "We're integrated with all major Indian and international couriers including FedEx, Blue Dart, DTDC, DHL, Delhivery, XpressBees, Ecom Express, Aramex, and many more.",
  },
  {
    q: "Do you charge a monthly subscription?",
    a: "No. We follow a pay-as-you-ship model. You only pay for the shipments you book — zero subscription, zero hidden charges.",
  },
  {
    q: "What is the discount on insurance services?",
    a: "We offer 10% to 35% discount on Vehicle (1st & 3rd party) and Life Insurance through our partnerships with LIC, HDFC Life, SBI Life, ICICI, Bajaj Allianz, Tata AIA and more.",
  },
  {
    q: "Do you handle reverse pickups and returns?",
    a: "Yes, we provide hassle-free reverse pickup services for e-commerce returns and exchanges across 41,000+ pin codes in India.",
  },
  {
    q: "How does real-time tracking work?",
    a: "Every shipment gets a unique tracking ID. Customers receive SMS updates at each stage and can track live on a custom branded tracking page.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container mx-auto container-px">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              FAQ
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              Frequently Asked{" "}
              <span className="text-gradient-brand">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-sm hover:shadow-md transition-smooth"
              >
                <AccordionTrigger className="text-left font-display font-bold text-base hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
