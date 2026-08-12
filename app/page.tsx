import { Navbar } from "@/components/layout/navbar";
import { NavbarMobile } from "@/components/layout/navbar-mobile";

import { Hero } from "@/components/sections/hero";
import { HeroMobile } from "@/components/sections/hero-mobile";
import { About } from "@/components/sections/about";
import { Cuidados } from "@/components/sections/cuidados";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { Contato } from "@/components/sections/contato";

import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      {/* Navbar Desktop */}
      <div className="hidden lg:block">
        <Navbar />
      </div>

      {/* Navbar Mobile */}
      <div className="block lg:hidden">
        <NavbarMobile />
      </div>

      {/* Hero Desktop */}
      <div className="hidden lg:block">
        <Hero />
      </div>

      {/* Hero Mobile */}
      <div className="block lg:hidden">
        <HeroMobile />
      </div>

      <main>
        <About />
        <Cuidados />
        <ComoFunciona />
        <Contato />
      </main>

      <Footer />
    </>
  );
}