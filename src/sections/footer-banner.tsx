import {Button} from "@/components/ui/button";

export default function FooterBanner() {
    return (
        <div className="relative w-full h-64 md:h-80 lg:h-[448px] flex items-center justify-center bg-cover bg-center text-center text-white"
             style={{ backgroundImage: "url('/assets/images/footer-banner/Banner.png')" }}>
            <div>
                <h2 className="text-[72px] font-normal">Big Summer <strong>Sale</strong></h2>
                <p className="mb-8 text-[#787878] text-base font-normal md:text-lg">
                    Commodo fames vitae vitae leo mauris in. Eu consequat.
                </p>
                <Button
                    variant="outline"
                    className="bg-transparent text-white font-medium text-base border border-white py-6 px-10 rounded-[6px]">
                    Shop Now
                </Button>
            </div>
        </div>
    );
}
