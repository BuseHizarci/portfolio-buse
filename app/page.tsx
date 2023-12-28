import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Particles from "./components/particles";
import Spacer from "./components/Spacer";
export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center ">
      <Particles
        className="absolute inset-1 -z-10 animate-fade-in bg-slate-800"
        quantity={300}
      />
      <Navbar />
      <Spacer />
      <HeroSection />
      <Spacer />
      <Footer />
    </main>
  );
}
