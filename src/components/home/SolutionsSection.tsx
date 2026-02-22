import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/products";

const SolutionsSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Industry Solutions</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Tailored equipment packages for every type of washing facility</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map(ind => (
          <Link key={ind.id} to={`/shop?industry=${ind.id}`}
            className="group relative rounded-xl overflow-hidden aspect-[3/4] flex items-end">
            <img src={ind.image} alt={ind.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent" />
            <div className="relative p-6 w-full">
              <h3 className="font-display font-bold text-xl text-primary-foreground mb-1">{ind.name}</h3>
              <p className="text-sm text-primary-foreground/60 mb-3">{ind.description}</p>
              <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                View equipment <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
