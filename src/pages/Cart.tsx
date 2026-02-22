import { Link } from "react-router-dom";
import { Trash2, ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Browse our catalog and add products to your cart</p>
          <Link to="/shop"><Button className="bg-accent text-accent-foreground hover:bg-orange-hover">Browse Catalog</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Continue Shopping
        </Link>

        <h1 className="font-display text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="bg-card rounded-xl border border-border p-4 flex gap-4">
                <Link to={`/product/${product.id}`} className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${product.id}`} className="font-display font-semibold text-foreground hover:text-accent transition-colors line-clamp-1">{product.name}</Link>
                  <p className="text-sm text-muted-foreground">{product.brand} · {product.sku}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-border rounded-lg overflow-hidden">
                      <button onClick={() => updateQuantity(product.id, quantity - 1)} className="px-3 py-1 text-foreground hover:bg-muted transition-colors">−</button>
                      <span className="px-3 py-1 font-semibold text-foreground">{quantity}</span>
                      <button onClick={() => updateQuantity(product.id, quantity + 1)} className="px-3 py-1 text-foreground hover:bg-muted transition-colors">+</button>
                    </div>
                    <span className="font-display font-bold text-foreground">${(product.price * quantity).toLocaleString()}</span>
                  </div>
                </div>
                <button onClick={() => removeFromCart(product.id)} className="text-muted-foreground hover:text-destructive transition-colors self-start">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
            <Button variant="ghost" onClick={clearCart} className="text-destructive">Clear Cart</Button>
          </div>

          {/* Summary */}
          <div className="bg-card rounded-xl border border-border p-6 h-fit sticky top-32">
            <h2 className="font-display font-bold text-lg text-foreground mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="text-foreground font-semibold">${totalPrice.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-foreground font-semibold">{totalPrice > 500 ? "Free" : "$49"}</span></div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-display font-bold text-foreground">Total</span>
                <span className="font-display font-bold text-xl text-foreground">${(totalPrice + (totalPrice > 500 ? 0 : 49)).toLocaleString()}</span>
              </div>
            </div>
            <Button className="w-full mt-6 bg-accent text-accent-foreground hover:bg-orange-hover font-semibold text-base" size="lg">
              Proceed to Checkout
            </Button>
            <Button variant="outline" className="w-full mt-3" size="lg">Request Quote</Button>
            {totalPrice <= 500 && (
              <p className="text-xs text-muted-foreground text-center mt-3">Free shipping on orders over $500</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
