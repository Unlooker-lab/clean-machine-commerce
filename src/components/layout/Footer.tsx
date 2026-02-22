import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-lg">W</span>
            </div>
            <span className="font-display font-bold text-xl">WashPro</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Professional cleaning equipment supplier for car washes, self-service stations, tank container facilities, and truck wash systems.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Equipment</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/shop?category=High+Pressure+Washers" className="hover:text-accent transition-colors">High Pressure Washers</Link>
            <Link to="/shop?category=Pumps" className="hover:text-accent transition-colors">Pumps</Link>
            <Link to="/shop?category=Foam+Generators" className="hover:text-accent transition-colors">Foam Generators</Link>
            <Link to="/shop?category=Dosing+Systems" className="hover:text-accent transition-colors">Dosing Systems</Link>
            <Link to="/shop?category=Spare+Parts" className="hover:text-accent transition-colors">Spare Parts</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Industries</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/shop?industry=car-wash" className="hover:text-accent transition-colors">Car Wash</Link>
            <Link to="/shop?industry=self-service" className="hover:text-accent transition-colors">Self-Service Wash</Link>
            <Link to="/shop?industry=tank-wash" className="hover:text-accent transition-colors">Tank Container Wash</Link>
            <Link to="/shop?industry=truck-wash" className="hover:text-accent transition-colors">Truck Wash</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <span>+1 (800) 555-WASH</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <span>sales@washpro.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span>123 Industrial Ave, Houston TX</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-sm opacity-50 text-center">
        © 2026 WashPro Equipment. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
