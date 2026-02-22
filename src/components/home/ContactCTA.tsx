import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const ContactCTA = () => (
  <section className="py-20 bg-navy">
    <div className="container text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Need Help Choosing the Right Equipment?
      </h2>
      <p className="text-primary-foreground/60 max-w-2xl mx-auto mb-8 text-lg">
        Our engineering team will help you select, configure, and install the perfect washing system for your facility. Free consultation for B2B clients.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-orange-hover font-semibold px-8 text-base">
          <Phone className="mr-2 h-5 w-5" /> Call +1 (800) 555-WASH
        </Button>
        <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 text-base">
          <Mail className="mr-2 h-5 w-5" /> Request a Quote
        </Button>
      </div>
    </div>
  </section>
);

export default ContactCTA;
