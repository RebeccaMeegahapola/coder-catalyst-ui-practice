import Image from 'next/image';
import {HeartIcon} from "lucide-react";

interface Product {
    image: string;
    alt: string;
    label: string;
    description: string;
    descriptionMobile: string;
    price: string;
    isFavourite?: boolean;
}

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

    return (
        <div className="max-w-sm rounded-[10px] overflow-hidden shadow-sm bg-[#F6F6F6]">
            <div className="flex justify-end mt-8 mr-6 mb-4 sm:mb-0">
                {product.isFavourite ?
                    <HeartIcon fill="#FF0000" className="h-8 w-8 cursor-pointer text-[#FF0000]" strokeWidth={1}/>
                :
                    <HeartIcon className={`h-8 w-8 text-[#909090] hover:text-[#909090] cursor-pointer`} strokeWidth={1}/>
                }
            </div>

            <div className="flex flex-col justify-center items-center pb-4">
                <Image
                    src={product.image}
                    alt={product.label}
                    width={160}
                    height={160}
                    className="mb-4 w-[100px] h-[100px] sm:w-[160px] sm:h-[160px]"
                />
                <div className="hidden lg:block font-medium text-base text-black">{product.label}</div>
                <div className="min-h-[70px] lg:min-h-[40px] w-full flex items-center justify-center">
                    <p className="hidden lg:block font-medium text-base text-black mb-2 text-center">
                        {product.description || '\u00A0'}
                    </p>
                    <p className="block lg:hidden font-medium text-sm text-black mb-2 text-center">
                        {product.descriptionMobile}
                    </p>
                </div>
                <span
                    className="text-base sm:text-2xl font-semibold text-black mb-2">
                    {product.price}
                </span>
                <div className="px-4 sm:px-6 pt-4 pb-2">
                    <button
                        className="bg-black hover:bg-black text-white font-medium text-xs sm:text-sm py-3 px-5 md:px-8 lg:px-14 rounded-[8px] w-full">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}