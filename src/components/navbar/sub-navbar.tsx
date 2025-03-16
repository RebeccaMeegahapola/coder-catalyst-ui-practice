import Image from "next/image";
import {Separator} from "@/components/ui/separator";

const subNavItems = [
    { src: "/assets/images/sub-navbar/Phones.png", alt: "Phones", label: "Phones" },
    { src: "/assets/images/sub-navbar/Computers.png", alt: "Computers", label: "Computers" },
    { src: "/assets/images/sub-navbar/Gaming.png", alt: "Smart Watches", label: "Smart Watches" },
    { src: "/assets/images/sub-navbar/Cameras.png", alt: "Cameras", label: "Cameras" },
    { src: "/assets/images/sub-navbar/Headphones.png", alt: "Headphones", label: "Headphones" },
    { src: "/assets/images/sub-navbar/Gaming.png", alt: "Gaming", label: "Gaming" },
]

export default function SubNavbar() {
    return (
        <div className="py-4 bg-[#2E2E2E] min-w-full pt-[90px]">
            <div className="container mx-auto px-4 md:px-20 lg:max-w-[1000px] 2xl:max-w-[1300px]">
                <div className="flex flex-wrap justify-center gap-4 xl:justify-between sm:gap-6 lg:gap-8">
                    {subNavItems.map((item, index) => (
                        <div key={item.alt} className="flex items-center gap-4 sm:gap-8">
                            <div className="flex items-center gap-2 sm:gap-4">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                                <span className="text-white text-base font-medium">{item.label}</span>
                            </div>
                            {/* Hide separator on small screens and show on medium and larger screens */}
                            {index !== subNavItems.length - 1 && (
                                <Separator orientation="vertical" className="h-6 bg-gray-600"/>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}