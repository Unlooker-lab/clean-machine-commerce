import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, GitCompareArrows, Search, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const { totalItems, compareList, wishlist } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-navy text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3" />
            <span>+1 (800) 555-WASH</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Mon–Fri: 8:00–18:00</span>
            <span>·</span>
            <span>Free shipping on orders over $500</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-card shadow-md">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-lg">W</span>
            </div>
            <div>
              <span className="font-display font-bold text-xl text-primary">WashPro</span>
              <span className="hidden md:block text-xs text-muted-foreground">Professional Equipment</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/shop" className="font-medium text-foreground hover:text-accent transition-colors">Catalog</Link>
            <Link to="/shop?industry=car-wash" className="font-medium text-foreground hover:text-accent transition-colors">Car Wash</Link>
            <Link to="/shop?industry=self-service" className="font-medium text-foreground hover:text-accent transition-colors">Self-Service</Link>
            <Link to="/shop?industry=tank-wash" className="font-medium text-foreground hover:text-accent transition-colors">Tank Wash</Link>
            <Link to="/shop?industry=truck-wash" className="font-medium text-foreground hover:text-accent transition-colors">Truck Wash</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)} className="text-foreground">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/shop?view=compare">
              <Button variant="ghost" size="icon" className="relative text-foreground">
                <GitCompareArrows className="h-5 w-5" />
                {compareList.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">{compareList.length}</span>
                )}
              </Button>
            </Link>
            <Link to="/shop?view=wishlist">
              <Button variant="ghost" size="icon" className="relative text-foreground">
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">{wishlist.length}</span>
                )}
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative text-foreground">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">{totalItems}</span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-border pb-4">
            <form onSubmit={handleSearch} className="container flex gap-2 pt-4">
              <input
                type="text"
                placeholder="Search products, brands, SKU..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                autoFocus
              />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-orange-hover">Search</Button>
            </form>
          </div>
        )}

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-border pb-4">
            <div className="container flex flex-col gap-2 pt-4">
              <Link to="/shop" onClick={() => setMobileOpen(false)} className="py-2 font-medium text-foreground hover:text-accent">Catalog</Link>
              <Link to="/shop?industry=car-wash" onClick={() => setMobileOpen(false)} className="py-2 font-medium text-foreground hover:text-accent">Car Wash</Link>
              <Link to="/shop?industry=self-service" onClick={() => setMobileOpen(false)} className="py-2 font-medium text-foreground hover:text-accent">Self-Service</Link>
              <Link to="/shop?industry=tank-wash" onClick={() => setMobileOpen(false)} className="py-2 font-medium text-foreground hover:text-accent">Tank Wash</Link>
              <Link to="/shop?industry=truck-wash" onClick={() => setMobileOpen(false)} className="py-2 font-medium text-foreground hover:text-accent">Truck Wash</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
