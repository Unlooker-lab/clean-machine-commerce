import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Industrial cleaning equipment" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-transparent" />
    </div>
    <div className="container relative z-10 py-20">
      <div className="max-w-2xl animate-fade-in">
        <span className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-accent/30">
          Certified Equipment Supplier
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
          Professional Cleaning Equipment for{" "}
          <span className="text-accent">Every Industry</span>
        </h1>
        <p className="text-lg text-primary-foreground/70 mb-8 leading-relaxed max-w-xl">
          High-pressure washers, pumps, dosing systems, and complete wash solutions
          for car washes, self-service stations, tank containers, and truck fleets.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/shop">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-orange-hover font-semibold px-8 text-base">
              Go to Catalog <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 text-base">
            <Phone className="mr-2 h-5 w-5" /> Get Consultation
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
