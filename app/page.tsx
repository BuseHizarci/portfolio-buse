import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Particles from "./components/particles";
import Spacer from "./components/Spacer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <Particles
        className="absolute inset-1 -z-10 animate-fade-in bg-slate-800"
        quantity={300}
      />
      <Navbar />
      <Spacer />
      <HeroSection />
      <Spacer />
      <Footer />
      <Spacer />
    </main>
  );
}
