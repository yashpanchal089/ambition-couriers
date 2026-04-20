import { Search, Package, CheckCircle2, Truck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const TrackShipment = () => {
  const [tracking, setTracking] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (tracking.trim()) setShowResult(true);
  };

  const steps = [
    { icon: Package, label: "Picked Up", time: "Mon · 09:42 AM", done: true },
    { icon: Truck, label: "In Transit", time: "Mon · 06:15 PM", done: true },
    { icon: MapPin, label: "Out for Delivery", time: "Tue · 08:30 AM", done: true, current: true },
    { icon: CheckCircle2, label: "Delivered", time: "Tue · ETA 02:00 PM", done: false },
  ];

  return (
    <section id="track" className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto container-px relative">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider mb-5">
            Real-Time Tracking
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Track Your Shipment in Real-Time
          </h2>
          <p className="text-white/80 mt-4 text-lg">
            Enter your tracking ID below to get instant updates on your package location.
          </p>
        </div>

        <form onSubmit={handleTrack} className="max-w-2xl mx-auto bg-card rounded-2xl shadow-premium p-2 flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-3 flex-1 px-4">
            <Search className="w-5 h-5 text-muted-foreground shrink-0" />
            <Input
              type="text"
              value={tracking}
              onChange={(e) => setTracking(e.target.value)}
              placeholder="Enter Tracking ID (e.g. ACL123456789)"
              className="border-0 focus-visible:ring-0 shadow-none px-0 text-base h-12"
            />
          </div>
          <Button type="submit" variant="cta" size="lg" className="sm:w-auto w-full">
            Track Now
          </Button>
        </form>

        {showResult && (
          <div className="max-w-3xl mx-auto mt-8 bg-card rounded-2xl shadow-premium p-6 lg:p-8 animate-fade-in-up">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Tracking ID</div>
                <div className="font-display font-bold text-lg text-foreground">{tracking || "ACL123456789"}</div>
              </div>
              <div className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold">
                Out for Delivery
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4 mb-6 text-sm">
              <div>
                <div className="text-muted-foreground">From</div>
                <div className="font-semibold text-foreground">Mumbai, MH</div>
              </div>
              <div>
                <div className="text-muted-foreground">To</div>
                <div className="font-semibold text-foreground">Bengaluru, KA</div>
              </div>
            </div>

            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full grid place-items-center transition-smooth ${
                      s.current ? "bg-gradient-accent text-accent-foreground shadow-accent-glow animate-pulse-glow" :
                      s.done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <s.icon className="w-5 h-5" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`w-0.5 flex-1 my-1 ${s.done ? "bg-primary" : "bg-border"}`} />
                    )}
                  </div>
                  <div className="pb-4 flex-1">
                    <div className="font-semibold text-foreground">{s.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackShipment;
