import Image from "next/image";
import {Separator} from "@/components/ui/separator";

export const SubNavbar = () => {
    return (
        <div className="py-4 bg-[#2E2E2E] min-w-full pt-[90px]">
            <div className="w-full 2xl:max-w-[1320px] mx-auto px-[25px] lg:px-[100px]">
                <div className="flex justify-between items-center gap-4 sm:gap-6 lg:gap-8">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/assets/sub-navbar/Phones.png"
                            alt="Phones"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <span className="text-white text-base font-medium">Phones</span>
                    </div>

                    <Separator orientation="vertical" className="h-6 bg-gray-600"/>

                    <div className="flex items-center gap-4">
                        <Image
                            src="/assets/sub-navbar/Computers.png"
                            alt="Computers"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <span className="text-white text-base font-medium">Computers</span>
                    </div>

                    <Separator orientation="vertical" className="h-6 bg-gray-600"/>

                    <div className="flex items-center gap-4">
                        <Image
                            src="/assets/sub-navbar/Gaming.png"
                            alt="Smart Watches"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <span className="text-white text-base font-medium">Smart Watches</span>
                    </div>

                    <Separator orientation="vertical" className="h-6 bg-gray-600"/>

                    <div className="flex items-center gap-4">
                        <Image
                            src="/assets/sub-navbar/Cameras.png"
                            alt="Cameras"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <span className="text-white text-base font-medium">Cameras</span>
                    </div>

                    <Separator orientation="vertical" className="h-6 bg-gray-600"/>

                    <div className="flex items-center gap-4">
                        <Image
                            src="/assets/sub-navbar/Headphones.png"
                            alt="Headphones"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <span className="text-white text-base font-medium">Headphones</span>
                    </div>

                    <Separator orientation="vertical" className="h-6 bg-gray-600"/>

                    <div className="flex items-center gap-4">
                        <Image
                            src="/assets/sub-navbar/Gaming.png"
                            alt="Gaming"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <span className="text-white text-base font-medium">Gaming</span>
                    </div>
                </div>
            </div>
        </div>
    )
}