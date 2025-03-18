import {ChevronLeft, ChevronRight} from "lucide-react";
import Image from "next/image";

const CategoryItems = [
    { src: "/assets/images/categories/Phones.png", alt: "Phones", label: "Phones" },
    { src: "/assets/images/categories/Smart Watches.png", alt: "Smart Watches", label: "Smart Watches" },
    { src: "/assets/images/categories/Cameras.png", alt: "Cameras", label: "Cameras" },
    { src: "/assets/images/categories/Headphones.png", alt: "Headphones", label: "Headphones" },
    { src: "/assets/images/categories/Computers.png", alt: "Computers", label: "Computers" },
    { src: "/assets/images/categories/Gaming.png", alt: "Gaming", label: "Gaming" },
]

export default function CategorySection() {
    return (
        <div className="bg-[#FAFAFA] min-w-full py-20">
            <div className="container mx-auto px-4 md:px-20 lg:max-w-[1000px] 2xl:max-w-[1300px]">
                <div className="flex justify-between items-center mb-7">
                    <p className="text-2xl font-medium text-black">Browse By Category</p>
                    <div className="flex gap-2">
                        <button className="text-black">
                            <ChevronLeft size={32}/>
                        </button>
                        <button
                            className="text-black">
                            <ChevronRight size={32}/>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {CategoryItems.map((category, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-[15px] bg-[#EDEDED] flex flex-col items-center justify-center text-center"
                        >
                            <Image
                                src={category.src}
                                alt={category.alt}
                                width={48}
                                height={48}
                                className="w-12 h-12 mx-4"
                            />
                            <span className="text-base font-medium text-black mt-3">{category.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}