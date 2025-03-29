import ProductCard from "@/components/products/product-card";

export default function DiscountSection() {
    const Products = [
        {image: "/assets/images/products/Iphone 14 pro 3.png", alt: "Apple iPhone 14 Pro 512GB Gold", label: "Apple iPhone 14 Pro 512GB Gold", description: "(MQ233)", descriptionMobile: "Apple iPhone 14 Pro 512GB Gold (MQ233)", price: "$1437"},
        {image: "/assets/images/products/airpods.png", alt: "AirPods Max Silver", label: "AirPods Max Silver", description: "", descriptionMobile: "AirPods Max Silver", price: "$549"},
        {image: "/assets/images/products/applewatch.png", alt: "Apple Watch Series 9", label: "Apple Watch Series 9 GPS 41mm", description: "Starlight Aluminium Case", descriptionMobile: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case", price: "$399"},
        {image: "/assets/images/products/Iphone 14 pro 2.png", alt: "Apple iPhone 14 Pro 1TB Gold", label: "Apple iPhone 14 Pro 1TB Gold", description: "(MQ2V3)", descriptionMobile: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)", price: "$1499"},
    ]

    return (
        <div className="bg-white min-w-full py-10 sm:py-20">
            <div className='container mx-auto px-4 md:px-20 lg:max-w-[1000px] 2xl:max-w-[1300px]'>
                <h2 className="text-2xl font-medium text-black">Discounts up to -50%</h2>

                <div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-4 mt-10'>
                    {Products.map((product, index) => (
                        <ProductCard key={index} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    )
}