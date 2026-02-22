import { Shield, Wrench, Headphones, Truck } from "lucide-react";

const advantages = [
  { icon: Shield, title: "Certified Supplier", desc: "Official distributor of leading brands with full manufacturer warranty" },
  { icon: Wrench, title: "Spare Parts in Stock", desc: "Extensive inventory of spare parts for immediate dispatch" },
  { icon: Headphones, title: "Engineering Support", desc: "Expert technical consultation and system design assistance" },
  { icon: Truck, title: "Fast Delivery", desc: "Nationwide shipping with express options for urgent orders" },
];

const AdvantagesSection = () => (
  <section className="py-20 bg-navy">
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12">Why Choose <span className="text-accent">WashPro</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantages.map((a, i) => (
          <div key={i} className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-5 group-hover:bg-accent/20 transition-colors">
              <a.icon className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">{a.title}</h3>
            <p className="text-sm text-primary-foreground/60">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
