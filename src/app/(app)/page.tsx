import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Screenshots } from "@/components/screenshots";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Screenshots />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
