import Link from "next/link";
import HeroSection from "./component/HeroSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  dark:bg-gray-800">
      <HeroSection />
    </main>
  );
}
