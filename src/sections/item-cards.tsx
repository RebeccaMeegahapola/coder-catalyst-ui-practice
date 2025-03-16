import Image from "next/image";

export default function ItemCards() {
    return (
        <div className="bg-white min-w-full">
            <div className="w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* First Column */}
                    <div className="grid grid-rows-2 h-[70%]">
                        {/* First Row */}
                        <div className="grid grid-cols-2 bg-white">
                            <Image
                                src="/assets/images/item-cards/item1.png"
                                alt='play-station'
                                width={513}
                                height={343}
                                className='object-cover h-auto w-auto'
                            />
                            <div className='flex flex-col justify-center items-center p-6 text-left'>
                                <p className='font-medium text-[49px] text-black'>Playstation 5</p>
                                <p className="text-[#909090] font-medium text-sm">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-2">
                            {/* First Sub-Column */}
                            <div className="grid grid-cols-2 bg-[#EDEDED]">
                                <Image
                                    src="/assets/images/item-cards/item2.png"
                                    alt='play-station'
                                    width={245}
                                    height={272}
                                    className=''
                                />
                                <div className='flex flex-col justify-center items-start p-6'>
                                    <p className='font-medium text-[49px] text-black'>Apple</p>
                                    <p className='font-medium text-[49px] text-black'>AirPods Max</p>
                                    <p className="text-[#909090] font-medium text-sm">Computational audio. Listen, it's powerful</p>
                                </div>
                            </div>

                            {/* Second Sub-Column */}
                            <div className="grid grid-cols-2 bg-[#353535]">
                                <Image
                                    src="/assets/images/item-cards/item3.png"
                                    alt='play-station'
                                    width={312}
                                    height={190}
                                    className=''
                                />
                                <div className='flex flex-col justify-center items-start p-6'>
                                    <p className='font-medium text-[49px] text-black'>Apple</p>
                                    <p className='font-medium text-[49px] text-black'>Vision Pro</p>
                                    <p className="text-[#909090] font-medium text-sm">An immersive way to experience entertainment</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="bg-[#EDEDED] p-6 rounded-lg">
                        <div className="grid grid-cols-2 bg-[#EDEDED]">
                            <Image
                                src="/assets/images/item-cards/item3.png"
                                alt='play-station'
                                width={312}
                                height={190}
                                className=''
                            />
                            <div className='flex flex-col justify-center items-start p-6'>
                                <p className='font-medium text-[49px] text-black'>Macbook Air</p>
                                <p className="text-[#909090] font-medium text-sm">The new 15‑inch MacBook Air makes room
                                    for more of what you love with a spacious Liquid Retina display.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}