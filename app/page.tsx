import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Particles from "./components/particles";

export default function Home() {
  return (
    <>
      <main className="flex max-h-screen flex-col items-center justify-center ">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in bg-slate-800"
          quantity={100}
        />
        <Navbar />
        <HeroSection />
        <Footer />
      </main>
    </>
  );
}
