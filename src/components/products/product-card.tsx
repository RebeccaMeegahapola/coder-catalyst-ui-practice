import Image from 'next/image';
import {HeartIcon} from "lucide-react";

export default function ProductCard() {
    return (
        <div className="max-w-sm rounded-[10px] overflow-hidden shadow-sm bg-[#F6F6F6]">
            <div className="flex justify-end mt-8 mr-6">
                <HeartIcon className="h-8 w-8 text-[#909090] hover:text-[#909090] cursor-pointer"/>
            </div>

            <div className="flex flex-col justify-center items-center pb-4">
                <Image
                    src="/assets/images/products/Iphone 14 pro.png"
                    alt="Apple iPhone 14 Pro Max Deep Purple"
                    width={160}
                    height={160}
                    className="mb-4 w-[160px] h-[160px]"
                />
                <div className="font-medium text-base text-black">Apple iPhone 14 Pro Max 128GB</div>
                <p className="font-medium text-base text-black mb-2">
                    Deep Purple (MO9T3RX/A)
                </p>
                <span
                    className="text-2xl font-semibold text-black mb-2">
                    $900
                </span>
                <div className="px-6 pt-4 pb-2">
                    <button className="bg-black hover:bg-black text-white font-medium text-sm py-2 px-14 rounded-[8px]">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}