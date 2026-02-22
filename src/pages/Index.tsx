import HeroSection from "@/components/home/HeroSection";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import BrandsSlider from "@/components/home/BrandsSlider";
import BlogPreview from "@/components/home/BlogPreview";
import ContactCTA from "@/components/home/ContactCTA";
import SEOBlock from "@/components/home/SEOBlock";

const Index = () => (
  <>
    <HeroSection />
    <CategoriesGrid />
    <FeaturedProducts />
    <AdvantagesSection />
    <SolutionsSection />
    <BrandsSlider />
    <BlogPreview />
    <ContactCTA />
    <SEOBlock />
  </>
);

export default Index;
