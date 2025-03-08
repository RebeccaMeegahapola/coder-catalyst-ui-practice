import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div
            className="relative min-h-[632px] flex items-center justify-center bg-cover bg-center min-w-full"
            style={{ backgroundImage: "url('/assets/hero-section/Banner.png')" }}
        >
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="w-full 2xl:max-w-[1320px] mx-auto px-[25px] lg:px-[100px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center lg:text-left">
                        <p className="text-[25px] font-semibold sm:text-xl text-[#909090] mb-2">
                            Pro.Beyond.
                        </p>
                        <h1 className="text-[96px] font-bold text-white mb-2 leading-[1.1]">
                            iPhone 14 Pro
                        </h1>
                        <p className="text-lg text-[#909090] mb-6">
                            Created to change everything for the better. For everyone
                        </p>
                        <Link
                            href="/shop"
                            className="bg-transparent text-white px-6 py-3 rounded-[6px] border border-white text-base font-medium hover:bg-white hover:text-black transition duration-300"
                        >
                            Shop Now
                        </Link>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src="/assets/hero-section/phone-image.png"
                            alt="iPhone 14 Pro"
                            width={300}
                            height={250}
                            className="w-[300px] h-[250px] lg:w-[350px] lg:h-[300px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}