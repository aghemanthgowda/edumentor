import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mentors from "@/components/Mentors";
import Courses from "@/components/Courses";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Mentors />
        <Courses />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
