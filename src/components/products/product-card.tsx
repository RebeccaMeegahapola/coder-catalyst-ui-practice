import Image from 'next/image';
import {HeartIcon} from "lucide-react";

interface Product {
    image: string;
    alt: string;
    label: string;
    description: string;
    price: string;
    isFavourite?: boolean;
}

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

    return (
        <div className="max-w-sm rounded-[10px] overflow-hidden shadow-sm bg-[#F6F6F6]">
            <div className="flex justify-end mt-8 mr-6">
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
                    className="mb-4 w-[160px] h-[160px]"
                />
                <div className="font-medium text-base text-black">{product.label}</div>
                <p className="font-medium text-base text-black mb-2">
                    {product.description || '\u00A0'}
                </p>
                <span
                    className="text-2xl font-semibold text-black mb-2">
                    {product.price}
                </span>
                <div className="px-6 pt-4 pb-2">
                    <button className="bg-black hover:bg-black text-white font-medium text-sm py-3 px-14 rounded-[8px]">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}