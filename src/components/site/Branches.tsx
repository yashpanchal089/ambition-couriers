import { MapPin, Globe } from "lucide-react";
import networkImg from "@/assets/network-map.jpg";

const branches = [
  "Goregaon", "Andheri", "Chandivali", "Kanjur Marg",
  "Sewri West", "Vasai", "Bhiwandi",
];

const Branches = () => {
  return (
    <section id="branches" className="py-20 lg:py-28 bg-primary-deep text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={networkImg} alt="" width={1600} height={900} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/90 to-primary-deep/40" />

      <div className="container mx-auto container-px relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider mb-5">
              Our Branches
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Mumbai-Wide Presence,{" "}
              <span className="text-gradient-accent">PAN India Reach</span>
            </h2>
            <p className="text-white/80 mt-4 text-lg max-w-xl">
              Multiple branches across Mumbai for faster pickups and seamless coordination.
              Nationwide service to 41,000+ pin codes.
            </p>

            <div className="mt-8 flex items-center gap-3 px-5 py-4 rounded-2xl bg-gradient-accent text-accent-foreground shadow-accent-glow w-fit">
              <Globe className="w-6 h-6" />
              <span className="font-display font-bold text-lg">PAN India Service Available</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {branches.map((b) => (
              <div
                key={b}
                className="group p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/15 hover:bg-white/20 hover:-translate-y-1 transition-spring"
              >
                <MapPin className="w-5 h-5 text-accent mb-2 group-hover:scale-110 transition-spring" />
                <div className="font-display font-bold">{b}</div>
                <div className="text-xs text-white/60 mt-0.5">Mumbai</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
