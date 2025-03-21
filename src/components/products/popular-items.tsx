import Image from 'next/image';
import {Button} from "@/components/ui/button";

export default function PopularItems() {
    const products = [
        {
            title: "Popular Products",
            description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
            image: "/assets/images/products/iWatch.png",
            bgColor: "bg-white"
        },
        {
            title: "Ipad Pro",
            description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
            image: "/assets/images/products/ipadPro.png",
            bgColor: "bg-[#F9F9F9]"
        },
        {
            title: "Samsung Galaxy",
            description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
            image: "/assets/images/products/samsungGalaxy.png",
            bgColor: "bg-[#EAEAEA]"
        },
        {
            title: "Macbook Pro",
            description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
            image: "/assets/images/products/Macbook 1.png",
            bgColor: "bg-[#2C2C2C]"
        },
    ];

    return (
        <div className="pb-5 bg-white">
            <div className="mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <div key={index} className={`${product.bgColor} overflow-hidden`}>
                            <div className="relative h-48">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-[33px] font-light text-black mb-3">{product.title}</h2>
                                <p className="text-[#909090] text-sm font-medium mb-6">{product.description}</p>
                                <Button
                                    variant="outline"
                                    className="text-black font-medium text-base border border-black py-6 px-10 rounded-[6px]">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}