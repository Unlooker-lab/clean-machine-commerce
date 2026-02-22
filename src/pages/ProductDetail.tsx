import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart, GitCompareArrows, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart, toggleCompare, toggleWishlist, compareList, wishlist } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop"><Button>Back to Catalog</Button></Link>
        </div>
      </div>
    );
  }

  const isCompared = compareList.includes(product.id);
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-card rounded-xl border border-border overflow-hidden aspect-square">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Info */}
          <div>
            <span className="text-sm text-muted-foreground">{product.brand} · SKU: {product.sku}</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-6">
              {product.inStock ? (
                <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "hsl(142, 71%, 45%)" }}><Check className="h-4 w-4" /> In Stock</span>
              ) : (
                <span className="inline-flex items-center gap-1 text-sm text-destructive font-semibold"><X className="h-4 w-4" /> Out of Stock</span>
              )}
            </div>

            <div className="mb-6">
              <span className="font-display text-4xl font-bold text-foreground">${product.price.toLocaleString()}</span>
              {product.oldPrice && (
                <span className="text-xl text-muted-foreground line-through ml-3">${product.oldPrice.toLocaleString()}</span>
              )}
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            {/* Specs */}
            <div className="bg-muted rounded-xl p-6 mb-8">
              <h3 className="font-display font-bold text-foreground mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Pressure:</span> <span className="font-semibold text-foreground">{product.pressure}</span></div>
                <div><span className="text-muted-foreground">Power:</span> <span className="font-semibold text-foreground">{product.power}</span></div>
                <div><span className="text-muted-foreground">Brand:</span> <span className="font-semibold text-foreground">{product.brand}</span></div>
                <div><span className="text-muted-foreground">Category:</span> <span className="font-semibold text-foreground">{product.category}</span></div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center border border-border rounded-lg overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 text-foreground hover:bg-muted transition-colors font-bold">−</button>
                <span className="px-4 py-3 font-semibold text-foreground min-w-[48px] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3 text-foreground hover:bg-muted transition-colors font-bold">+</button>
              </div>
              <Button size="lg" disabled={!product.inStock} onClick={() => addToCart(product, qty)}
                className="flex-1 bg-accent text-accent-foreground hover:bg-orange-hover font-semibold text-base">
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => toggleWishlist(product.id)} className={isWishlisted ? "border-accent text-accent" : ""}>
                <Heart className="h-4 w-4 mr-2" fill={isWishlisted ? "currentColor" : "none"} /> Wishlist
              </Button>
              <Button variant="outline" onClick={() => toggleCompare(product.id)} className={isCompared ? "border-accent text-accent" : ""}>
                <GitCompareArrows className="h-4 w-4 mr-2" /> Compare
              </Button>
              <Button variant="outline">Request Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
