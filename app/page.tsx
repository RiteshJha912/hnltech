import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero"
import OurServices from "@/components/OurServices";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { HiHome } from "react-icons/hi2";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero/>
        <Grid/>
        <OurServices/>
        <Clients/>
      </div>
    </main>
  );
}
