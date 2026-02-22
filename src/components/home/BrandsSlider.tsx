import { brands } from "@/data/products";

const BrandsSlider = () => (
  <section className="py-16 bg-surface border-y border-border">
    <div className="container">
      <h2 className="font-display text-2xl font-bold text-foreground text-center mb-10">Trusted Brands We Supply</h2>
      <div className="overflow-hidden">
        <div className="flex animate-scroll-brands gap-12" style={{ width: "max-content" }}>
          {[...brands, ...brands].map((brand, i) => (
            <div key={`${brand.id}-${i}`} className="flex-shrink-0 w-32 h-16 bg-card rounded-lg border border-border flex items-center justify-center hover:border-accent transition-colors">
              <span className="font-display font-bold text-xl text-muted-foreground">{brand.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BrandsSlider;
