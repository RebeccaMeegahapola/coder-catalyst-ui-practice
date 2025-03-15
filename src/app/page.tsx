import {Header} from "@/components/navbar/header";
import {SubNavbar} from "@/components/navbar/sub-navbar";
import HeroSection from "@/components/sections/hero-section";

export default function Home() {
  return (
    <div className={'w-[100vw]'}>
      <Header />
      <SubNavbar />
      <HeroSection />
    </div>
  );
}
