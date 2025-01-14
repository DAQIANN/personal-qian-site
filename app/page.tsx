import Image from "next/image";
import PageHome from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start justify-center flex-grow p-8 sm:p-20">
        <PageHome />
        <About />
      </main>

      <footer className="bg-black text-white py-6 w-full">
        <Footer />
      </footer>
    </div>
  );
}
