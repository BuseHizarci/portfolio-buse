import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-800 dark:bg-gray-800">
      <Navbar />
      <HeroSection />
    </main>
  );
}
