import ProductCard from "@/components/products/product-card";

export default function Products() {
    return (
        <div className="bg-white min-w-full py-20">
            <div className='container mx-auto px-4 md:px-20 lg:max-w-[1000px] 2xl:max-w-[1300px]'>
                <div className='grid grid-cols-2 sm:grid-cols-4'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}