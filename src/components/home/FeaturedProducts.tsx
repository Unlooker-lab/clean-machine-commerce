import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

const FeaturedProducts = () => {
  const featured = products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-20 bg-surface">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Featured Products</h2>
            <p className="text-muted-foreground">Top-selling equipment for professional operations</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-1 text-accent font-semibold hover:gap-2 transition-all">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/shop" className="md:hidden flex items-center justify-center gap-1 mt-8 text-accent font-semibold">
          View all products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
