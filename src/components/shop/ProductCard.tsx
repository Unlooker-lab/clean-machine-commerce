import { Link } from "react-router-dom";
import { ShoppingCart, Heart, GitCompareArrows } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, toggleCompare, toggleWishlist, compareList, wishlist } = useCart();
  const isCompared = compareList.includes(product.id);
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="relative overflow-hidden aspect-square bg-muted">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        {product.oldPrice && (
          <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">
            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
            <span className="bg-card text-foreground font-bold px-4 py-2 rounded">Out of Stock</span>
          </div>
        )}
        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }} className={`p-2 rounded-full shadow-md transition-colors ${isWishlisted ? 'bg-accent text-accent-foreground' : 'bg-card text-foreground hover:bg-accent hover:text-accent-foreground'}`}>
            <Heart className="h-4 w-4" fill={isWishlisted ? "currentColor" : "none"} />
          </button>
          <button onClick={(e) => { e.preventDefault(); toggleCompare(product.id); }} className={`p-2 rounded-full shadow-md transition-colors ${isCompared ? 'bg-accent text-accent-foreground' : 'bg-card text-foreground hover:bg-accent hover:text-accent-foreground'}`}>
            <GitCompareArrows className="h-4 w-4" />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-muted-foreground mb-1">{product.brand} · {product.sku}</span>
        <Link to={`/product/${product.id}`} className="font-display font-semibold text-sm text-foreground hover:text-accent transition-colors line-clamp-2 mb-2">
          {product.name}
        </Link>
        <div className="text-xs text-muted-foreground mb-3">
          {product.pressure} · {product.power}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="font-display font-bold text-lg text-foreground">${product.price.toLocaleString()}</span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">${product.oldPrice.toLocaleString()}</span>
            )}
          </div>
          <Button size="sm" disabled={!product.inStock} onClick={() => addToCart(product)} className="bg-accent text-accent-foreground hover:bg-orange-hover">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
