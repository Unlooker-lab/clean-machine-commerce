import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/shop/ProductCard";
import { products, categories, brands as brandList, industries } from "@/data/products";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "";
  const activeIndustry = searchParams.get("industry") || "";
  const activeBrand = searchParams.get("brand") || "";
  const searchQuery = searchParams.get("search") || "";
  const sortBy = searchParams.get("sort") || "name";

  const setFilter = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory) result = result.filter(p => p.category === activeCategory);
    if (activeIndustry) result = result.filter(p => p.industry.includes(activeIndustry));
    if (activeBrand) result = result.filter(p => p.brand === activeBrand);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    else result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [activeCategory, activeIndustry, activeBrand, searchQuery, sortBy]);

  const activeFilters = [activeCategory, activeIndustry, activeBrand, searchQuery].filter(Boolean);
  const industryName = industries.find(i => i.id === activeIndustry)?.name;

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="bg-navy py-10">
        <div className="container">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
            {industryName ? `${industryName} Equipment` : activeCategory || "Product Catalog"}
          </h1>
          <p className="text-primary-foreground/60 mt-2">{filtered.length} products found</p>
        </div>
      </div>

      <div className="container py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <Button variant="outline" onClick={() => setFiltersOpen(!filtersOpen)} className="lg:hidden">
              <SlidersHorizontal className="h-4 w-4 mr-2" /> Filters
            </Button>
            {activeFilters.length > 0 && (
              <Button variant="ghost" size="sm" onClick={() => setSearchParams({})} className="text-destructive">
                <X className="h-4 w-4 mr-1" /> Clear all
              </Button>
            )}
          </div>
          <select value={sortBy} onChange={e => setFilter("sort", e.target.value)}
            className="px-3 py-2 border border-border rounded-lg bg-card text-foreground text-sm">
            <option value="name">Sort by Name</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${filtersOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-card rounded-xl border border-border p-5 space-y-6 sticky top-32">
              <div>
                <h3 className="font-display font-bold text-sm text-foreground mb-3">Category</h3>
                <div className="space-y-1">
                  {categories.map(cat => (
                    <button key={cat.id} onClick={() => setFilter("category", activeCategory === cat.name ? "" : cat.name)}
                      className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${activeCategory === cat.name ? 'bg-accent text-accent-foreground font-semibold' : 'text-foreground hover:bg-muted'}`}>
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-sm text-foreground mb-3">Industry</h3>
                <div className="space-y-1">
                  {industries.map(ind => (
                    <button key={ind.id} onClick={() => setFilter("industry", activeIndustry === ind.id ? "" : ind.id)}
                      className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${activeIndustry === ind.id ? 'bg-accent text-accent-foreground font-semibold' : 'text-foreground hover:bg-muted'}`}>
                      {ind.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-sm text-foreground mb-3">Brand</h3>
                <div className="space-y-1">
                  {brandList.map(brand => (
                    <button key={brand.id} onClick={() => setFilter("brand", activeBrand === brand.name ? "" : brand.name)}
                      className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${activeBrand === brand.name ? 'bg-accent text-accent-foreground font-semibold' : 'text-foreground hover:bg-muted'}`}>
                      {brand.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSearchParams({})}>Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
