import ProductCard from "@/components/products/product-card";

export default function Products() {

    const Products = [
        {image: "/assets/images/products/Iphone 14 pro.png", alt: "Apple iPhone 14 Pro Max", label: "Apple iPhone 14 Pro Max 128GB", description: "Deep Purple (MO9T3RX/A)", price: "$900"},
        {image: "/assets/images/products/Camera.png", alt: "Blackmagic Pocket Cinema", label: "Blackmagic Pocket Cinema", description: "Camera 6k", price: "$2535"},
        {image: "/assets/images/products/applewatch.png", alt: "Apple Watch Series 9", label: "Apple Watch Series 9 GPS 41mm", description: "Starlight Aluminium Case", price: "$399"},
        {image: "/assets/images/products/airpods.png", alt: "AirPods Max Silver", label: "AirPods Max Silver", description: "", price: "$549"},
        {image: "/assets/images/products/watch.png", alt: "Samsung Galaxy Watch6 Classic", label: "Samsung Galaxy Watch6 Classic", description: "47mm Black", price: "$369"},
        {image: "/assets/images/products/galaxyZ.png", alt: "Galaxy Z Fold5 Unlocked | 256GB", label: "Galaxy Z Fold5 Unlocked | 256GB", description: "| Phantom Black", price: "$1799", isFavourite: true},
        {image: "/assets/images/products/galaxyBuds.png", alt: "Galaxy Buds FE", label: "Galaxy Buds FE", description: "Graphite", price: "$99.99"},
        {image: "/assets/images/products/ipad.png", alt: "Apple iPad 9", label: "Apple iPad 9 10.2\" 64GB Wi-Fi", description: "Silver (MK2L3) 2021", price: "$398"},
    ]

    return (
        <div className="bg-white min-w-full py-20">
            <div className='container mx-auto px-4 md:px-20 lg:max-w-[1000px] 2xl:max-w-[1300px]'>
                {/* Tabs Section */}
                <div className="flex justify-start gap-8 mb-8">
                  <span className="text-lg font-medium underline decoration-2 decoration-black underline-offset-4 text-black">
                    New Arrival
                  </span>
                  <span className="text-lg font-medium text-[#8B8B8B]">
                    Bestseller
                  </span>
                  <span className="text-lg font-medium text-[#8B8B8B]">
                    Featured Products
                  </span>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4'>
                    {Products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}