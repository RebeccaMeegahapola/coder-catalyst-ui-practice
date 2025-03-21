import {Header} from "@/components/navbar/header";
import SubNavbar from "@/components/navbar/sub-navbar";
import HeroSection from "@/sections/hero-section";
import CategoryCards from "@/sections/category-cards";
import Products from "@/sections/products";
import DiscountSection from "@/sections/discount-section";
import PopularItems from "@/components/products/popular-items";

export default function Home() {
    return (
        <div className={'w-[100vw]'}>
            <Header />
            <SubNavbar />
            <HeroSection />
            <CategoryCards />
            <Products />
            <PopularItems />
            <DiscountSection />
        </div>
    );
}
