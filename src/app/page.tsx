import {Header} from "@/components/navbar/header";
import SubNavbar from "@/components/navbar/sub-navbar";
import HeroSection from "@/sections/hero-section";
import CategoryCards from "@/sections/category-cards";
import Products from "@/sections/products";
import DiscountSection from "@/sections/discount-section";
import PopularItems from "@/components/products/popular-items";
import FooterBanner from "@/sections/footer-banner";
import Footer from "@/components/footer/footer";
import ProductCategories from "@/sections/product-categories";

export default function Home() {
    return (
        <div className={'w-[100vw]'}>
            <Header />
            <SubNavbar />
            <HeroSection />
            <ProductCategories />
            <CategoryCards />
            <Products />
            <PopularItems />
            <DiscountSection />
            <FooterBanner />
            <Footer />
        </div>
    );
}
