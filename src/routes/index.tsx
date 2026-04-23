import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Industries } from "@/components/site/Industries";
import { Testimonials } from "@/components/site/Testimonials";
import { Blogs } from "@/components/site/Blogs";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Precision Fuels — On-Demand Marine & Fleet Fuel Delivery" },
      { name: "description", content: "Reliable on-demand fuel delivery for marine, fleet, construction, and industrial operations across Miami-Dade & Broward County." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <WhyChoose />
      <Industries />
      <Testimonials />
      <Blogs />
      <CtaBanner />
      <Footer />
    </main>
  );
}
