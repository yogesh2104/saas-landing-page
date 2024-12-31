import BlogSection from "@/components/blog-section";
import CallToAction from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import PricingSection from "@/components/pricing-section";

export default function IndexPage() {
  return (
    <>
    <HeroSection/>
    <FeaturesSection/>
    <PricingSection/>
    <CallToAction/>
    <BlogSection/>
    <FAQSection/>
    </>
  )
}
