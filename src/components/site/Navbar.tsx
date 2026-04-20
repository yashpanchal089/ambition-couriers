import { useEffect, useState } from "react";
import { Menu, X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#features", label: "Features" },
  { href: "#partners", label: "Partners" },
  { href: "#branches", label: "Branches" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto container-px flex items-center justify-between h-16 lg:h-20">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-accent grid place-items-center shadow-accent-glow group-hover:scale-105 transition-spring">
            <Truck className="w-5 h-5 text-accent-foreground" />
          </div>
          <div className="leading-tight">
            <div className={cn("font-display font-bold text-base", scrolled ? "text-foreground" : "text-foreground")}>
              Ambition
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
              Couriers & Logistics
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative group"
            >
              {l.label}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="#track">Track Shipment</a>
          </Button>
          <Button variant="cta" size="sm" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto container-px py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-sm font-medium hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href="#track" onClick={() => setOpen(false)}>Track</a>
              </Button>
              <Button variant="cta" size="sm" className="flex-1" asChild>
                <a href="#contact" onClick={() => setOpen(false)}>Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
