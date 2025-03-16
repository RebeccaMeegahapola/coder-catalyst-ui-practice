import Image from "next/image";

export default function HeroSection() {
    return (
        <div
            className="relative min-h-[632px] flex justify-center bg-cover bg-center min-w-full"
            style={{backgroundImage: "url('/assets/images/hero-section/Banner.png')"}}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="container mx-auto relative z-10 px-6 md:px-20 lg:max-w-[1000px] 2xl:max-w-[1300px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full pt-20 sm:pt-10 md:pt-10 lg:pt-2">
                    <div className="flex flex-col justify-center text-left text-white">
                        <p className="text-[25px] font-semibold sm:text-xl text-[#909090] mb-1">
                            Pro.Beyond.
                        </p>

                        <h1 className="text-[48px] sm:text-[64px] lg:text-[96px] font-bold">
                            iPhone 14 Pro
                        </h1>

                        <p className="text-lg text-[#909090] mb-5">
                            Created to change everything for the better. For everyone
                        </p>

                        <button
                            className="bg-transparent text-white px-6 py-3 rounded-[6px] border border-white text-base font-medium hover:bg-transparent hover:text-white w-fit">
                            Shop Now
                        </button>
                    </div>

                    <div className="flex justify-end items-end h-full">
                        <div className="relative w-full h-[400px] lg:h-[500px]">
                            <Image
                                src="/assets/images/hero-section/phone-image.png"
                                alt="iPhone 14 Pro"
                                fill
                                className="object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}