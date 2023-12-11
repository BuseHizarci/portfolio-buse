import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-800 dark:bg-gray-800">
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}
