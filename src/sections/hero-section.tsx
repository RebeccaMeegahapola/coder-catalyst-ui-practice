'use client'

export default function HeroSection() {
    return (
        <div
            className="relative min-h-[632px] flex justify-center items-center bg-cover bg-center min-w-full"
            style={{ backgroundImage: "url('/assets/images/hero-section/Banner.png')" }}
        >
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="container mx-auto relative z-10 px-6 lg:max-w-[1000px] 2xl:max-w-[1300px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full pt-32 sm:pt-16">
                    <div className="text-center lg:text-left text-white flex flex-col justify-center">
                        <p className="text-[25px] font-semibold sm:text-xl text-[#909090] mb-1">
                            Pro.Beyond.
                        </p>

                        <p className="text-[48px] sm:text-[64px] lg:text-[96px] font-normal mb-1">
                            iPhone 14 <span className="text-[48px] sm:text-[64px] lg:text-[96px] font-bold">Pro</span>
                        </p>

                        <p className="text-lg text-[#909090] mb-5">
                            Created to change everything for the better. For everyone
                        </p>

                        <button className="bg-transparent text-white px-6 py-3 rounded-[6px] border border-white text-base font-medium hover:bg-white hover:text-black w-fit mx-auto lg:mx-0">
                            Shop Now
                        </button>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[500px]">
                            <img
                                src="/assets/images/hero-section/phone-image.png"
                                alt="iPhone 14 Pro"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
