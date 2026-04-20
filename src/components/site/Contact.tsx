import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.string().trim().min(2, "Select a service").max(80),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const contacts = [
  { name: "Shamshad", phones: ["9869765717", "7977427141"] },
  { name: "Sakil", phones: ["7977384663"] },
  { name: "Shahid", phones: ["8874472347"] },
  { name: "Ashfaq", phones: ["9322986601"] },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({
      title: "Message sent successfully!",
      description: "Our team will get back to you within 24 hours.",
    });
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold uppercase tracking-wider mb-5">
            Contact Us
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Talk to Our{" "}
            <span className="text-gradient-brand">Logistics Experts</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Get the best courier rates and personalized shipping solutions for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="p-6 rounded-2xl bg-gradient-hero text-primary-foreground shadow-elegant">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <div className="font-display font-bold mb-1">Head Office</div>
                  <p className="text-sm text-white/85 leading-relaxed">
                    Gala No. 12, Bharat Patel Compound,<br />
                    Mulund Link Road, Opp. Pravasi Ind Estate,<br />
                    Near Sahara Hotel, Goregaon East,<br />
                    Mumbai – 400063
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <div className="font-display font-bold mb-1">Email</div>
                  <a href="mailto:ambitioncouriers.2015@gmail.com" className="text-sm text-white/85 hover:text-accent break-all">
                    ambitioncouriers.2015@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-primary" />
                <div className="font-display font-bold text-foreground">Direct Lines</div>
              </div>
              <div className="space-y-3">
                {contacts.map((c) => (
                  <div key={c.name} className="flex items-center justify-between gap-2 pb-3 border-b border-border last:border-0 last:pb-0">
                    <span className="font-semibold text-foreground">{c.name}</span>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {c.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p}`}
                          className="text-sm text-primary font-medium hover:text-accent transition-smooth"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/919869765717"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl bg-success/10 border border-success/20 hover:bg-success hover:text-white transition-smooth group"
            >
              <div className="w-11 h-11 rounded-xl bg-success text-white grid place-items-center group-hover:bg-white group-hover:text-success transition-smooth">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-bold">Chat on WhatsApp</div>
                <div className="text-xs opacity-80">Quick replies, real conversations</div>
              </div>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-3 p-6 lg:p-8 rounded-2xl bg-gradient-card border border-border shadow-elegant space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Full Name</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="h-11"
                  maxLength={80}
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Phone</label>
                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="h-11"
                  maxLength={20}
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                className="h-11"
                maxLength={255}
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Service Required</label>
              <Input
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                placeholder="e.g. Domestic Shipping, Insurance"
                className="h-11"
                maxLength={80}
              />
              {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Message</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your shipping needs..."
                rows={4}
                maxLength={1000}
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Send Message <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-elegant border border-border">
          <iframe
            title="Ambition Couriers Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0398!2d72.86!3d19.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA5JzM2LjAiTiA3MsKwNTEnNDIuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
