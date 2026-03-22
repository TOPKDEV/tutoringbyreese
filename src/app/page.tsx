import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { MathTutoring } from "@/components/MathTutoring";
import { SATPrepSection } from "@/components/SATPrepSection";
import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <SocialProof />
      <About />
      <Benefits />
      <Testimonials />
      <SATPrepSection />
      <MathTutoring />
      <CallToAction />
      <FAQ />
      <Footer />
    </main>
  );
}
