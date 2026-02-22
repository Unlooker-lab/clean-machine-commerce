export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  oldPrice?: number;
  brand: string;
  power: string;
  pressure: string;
  category: string;
  industry: string[];
  image: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "HD 10/25-4 S Plus High-Pressure Washer",
    sku: "HPW-1025",
    price: 4850,
    oldPrice: 5200,
    brand: "Kärcher",
    power: "7.5 kW",
    pressure: "250 bar",
    category: "High Pressure Washers",
    industry: ["car-wash", "self-service"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    description: "Professional high-pressure washer for intensive cleaning in car wash operations.",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "ProMax Industrial Pump P200",
    sku: "PMP-200",
    price: 3200,
    brand: "Hawk",
    power: "5.5 kW",
    pressure: "200 bar",
    category: "Pumps",
    industry: ["car-wash", "tank-wash"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop",
    description: "High-performance industrial pump designed for continuous operation.",
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "FoamJet Pro 500 Foam Generator",
    sku: "FG-500",
    price: 1850,
    oldPrice: 2100,
    brand: "PA",
    power: "2.2 kW",
    pressure: "150 bar",
    category: "Foam Generators",
    industry: ["car-wash", "self-service", "truck-wash"],
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=400&h=400&fit=crop",
    description: "Advanced foam generation system with adjustable concentration control.",
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "DoseControl DC-300 Dosing System",
    sku: "DS-300",
    price: 2750,
    brand: "Seko",
    power: "0.5 kW",
    pressure: "10 bar",
    category: "Dosing Systems",
    industry: ["car-wash", "tank-wash", "self-service"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=400&fit=crop",
    description: "Precision chemical dosing system for automated wash programs.",
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "TruckBlast TB-400 Wash System",
    sku: "TB-400",
    price: 12500,
    brand: "WashTec",
    power: "15 kW",
    pressure: "300 bar",
    category: "Wash Systems",
    industry: ["truck-wash"],
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&h=400&fit=crop",
    description: "Complete truck washing system with automated brushes and high-pressure rinse.",
    inStock: false,
    featured: true,
  },
  {
    id: "6",
    name: "SelfServe SS-200 Wash Bay Unit",
    sku: "SS-200",
    price: 8900,
    brand: "Istobal",
    power: "11 kW",
    pressure: "180 bar",
    category: "Wash Systems",
    industry: ["self-service"],
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&h=400&fit=crop",
    description: "Complete self-service wash bay with coin/card payment system.",
    inStock: true,
  },
  {
    id: "7",
    name: "HP Nozzle Set Professional",
    sku: "NZ-PRO",
    price: 185,
    brand: "PA",
    power: "—",
    pressure: "300 bar",
    category: "Spare Parts",
    industry: ["car-wash", "self-service", "truck-wash", "tank-wash"],
    image: "https://images.unsplash.com/photo-1563456556955-365a0786eeae?w=400&h=400&fit=crop",
    description: "Professional-grade nozzle set for high-pressure applications.",
    inStock: true,
  },
  {
    id: "8",
    name: "TankClean TC-600 System",
    sku: "TC-600",
    price: 15800,
    brand: "Kärcher",
    power: "22 kW",
    pressure: "350 bar",
    category: "Wash Systems",
    industry: ["tank-wash"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop",
    description: "Automated tank container cleaning system with rotating spray heads.",
    inStock: true,
    featured: true,
  },
];

export const categories = [
  { id: "high-pressure-washers", name: "High Pressure Washers", icon: "💧", count: 24 },
  { id: "pumps", name: "Pumps", icon: "⚙️", count: 18 },
  { id: "foam-generators", name: "Foam Generators", icon: "🫧", count: 12 },
  { id: "dosing-systems", name: "Dosing Systems", icon: "🧪", count: 15 },
  { id: "wash-systems", name: "Wash Systems", icon: "🚿", count: 8 },
  { id: "spare-parts", name: "Spare Parts & Accessories", icon: "🔧", count: 156 },
];

export const industries = [
  { id: "car-wash", name: "Car Wash", description: "Professional car wash equipment and systems", image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop" },
  { id: "self-service", name: "Self-Service Wash", description: "Self-service car wash bay systems and components", image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&h=400&fit=crop" },
  { id: "tank-wash", name: "Tank Container Wash", description: "Industrial tank and container cleaning solutions", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" },
  { id: "truck-wash", name: "Truck Wash", description: "Heavy-duty truck and fleet washing systems", image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop" },
];

export const brands = [
  { id: "1", name: "Kärcher", logo: "K" },
  { id: "2", name: "Hawk", logo: "H" },
  { id: "3", name: "PA", logo: "PA" },
  { id: "4", name: "Seko", logo: "S" },
  { id: "5", name: "WashTec", logo: "W" },
  { id: "6", name: "Istobal", logo: "I" },
  { id: "7", name: "Interpump", logo: "IP" },
  { id: "8", name: "Comet", logo: "C" },
];

export const blogPosts = [
  {
    id: "1",
    title: "How to Choose the Right Pressure Washer for Your Car Wash Business",
    excerpt: "A comprehensive guide to selecting high-pressure equipment based on your facility's capacity and requirements.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    date: "2026-02-15",
    category: "Guides",
  },
  {
    id: "2",
    title: "5 Common Mistakes in Self-Service Car Wash Maintenance",
    excerpt: "Avoid costly downtime by learning the most frequent maintenance errors operators make.",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&h=400&fit=crop",
    date: "2026-02-10",
    category: "Maintenance",
  },
  {
    id: "3",
    title: "Tank Container Washing: Regulations and Best Practices",
    excerpt: "Stay compliant with industry regulations while maximizing your cleaning efficiency.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    date: "2026-02-05",
    category: "Industry",
  },
];
