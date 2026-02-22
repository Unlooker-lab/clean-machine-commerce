import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const CategoriesGrid = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Equipment Categories</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Browse our full range of professional cleaning equipment and spare parts</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map(cat => (
          <Link key={cat.id} to={`/shop?category=${encodeURIComponent(cat.name)}`}
            className="group bg-card rounded-xl border border-border p-6 text-center hover:border-accent hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-3">{cat.icon}</div>
            <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-accent transition-colors">{cat.name}</h3>
            <span className="text-xs text-muted-foreground">{cat.count} products</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesGrid;
