import Image from "next/image";

export default function ProductCategories() {
    return (
        <main className="min-h-screen">
            {/* Large & Medium Devices Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-rows-2">
                    <div className="bg-white flex items-center">
                        <Image src="/assets/images/item-cards/item1.png" alt="PS5" width={513} height={343}/>
                        <div className="p-4">
                            <h2 className="text-[49px] font-medium text-black mb-3">Playstation 5</h2>
                            <p className="text-sm text-[#909090] font-medium">
                                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your
                                PlayStation experience.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="bg-[#EDEDED] flex items-center">
                            <Image src="/assets/images/item-cards/item2.png" alt="AirPods" width={100} height={100}/>
                            <div className="p-4">
                                <h2 className="text-[29px] font-normal text-black">Apple</h2>
                                <h2 className="text-[29px] font-normal text-black mb-2">AirPods <strong>Max</strong>
                                </h2>
                                <p className="text-sm text-[#909090] font-medium mb-2">Computational audio.</p>
                                <p className="text-sm text-[#909090] font-medium">Listen, it's powerful</p>
                            </div>
                        </div>

                        <div className="bg-[#353535] text-white flex items-center">
                            <Image src="/assets/images/item-cards/item3.png" alt="Vision Pro" width={230} height={260}/>
                            <div className="p-4">
                                <h2 className="text-[29px] font-normal text-white">Apple</h2>
                                <h2 className="text-[29px] font-normal text-white mb-2">Vision <strong>Pro</strong></h2>
                                <p className="text-sm text-[#909090] font-medium">An immersive way to experience
                                    entertainment</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#EDEDED] flex items-center">
                    <div className="p-6 pl-10">
                        <h2 className="text-[64px] font-normal text-black mb-2">Macbook <strong>Air</strong></h2>
                        <p className="text-sm text-[#909090] font-medium mb-2">The new 15‑inch MacBook Air makes room
                            for more of what you love with a spacious Liquid Retina display.</p>
                        <button
                            className="mt-4 border border-black px-10 py-4 text-base font-medium hover:bg-black hover:text-white rounded-[6px]">
                            Shop Now
                        </button>
                    </div>
                    <Image src="/assets/images/item-cards/item4.png" alt="Vision Pro" width={400} height={502}/>
                </div>
            </div>

            {/* Small Devices Layout */}
            <div className="grid grid-cols-1 md:hidden">
                <div className="bg-[#EDEDED] p-5">
                    <Image src="/assets/images/item-cards/item1-sm.png" alt="PS5" width={200} height={200} className='mx-auto' />
                    <div className="p-4 text-center">
                        <h2 className="text-xl font-normal text-black mb-2">Apple AirPods <strong>Max</strong></h2>
                        <p className="text-sm text-[#909090] font-medium mb-1">Computational audio. Listen, it's powerful</p>
                    </div>
                </div>

                <div className="bg-[#353535] p-5">
                    <Image src="/assets/images/item-cards/item2-sm.png" alt="AirPods" width={300} height={200}
                           className='mx-auto'/>
                    <div className="p-4 text-center">
                        <h2 className="text-xl font-normal mb-2 text-white">Apple Vision <strong>Pro</strong></h2>
                        <p className="text-sm text-[#909090] font-medium">An immersive way to experience
                            entertainment</p>
                    </div>
                </div>

                <div className="bg-white p-5">
                    <Image src="/assets/images/item-cards/item3-sm.png" alt="Vision Pro" width={200} height={200}
                           className='mx-auto'/>
                    <div className="p-4 text-center">
                        <h2 className="text-2xl font-medium text-black mb-2">Playstation <strong>5</strong></h2>
                        <p className="text-sm text-[#909090] font-medium">
                            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your
                            PlayStation experience.
                        </p>
                    </div>
                </div>

                <div className="bg-[#EDEDED] p-5">
                    <Image src="/assets/images/item-cards/item4-sm.png" alt="Macbook" width={300} height={200}
                           className='mx-auto'/>
                    <div className="p-4 text-center">
                        <h2 className="text-3xl font-normal text-black mb-2"><strong>Macbook</strong> Air</h2>
                        <p className="text-sm text-[#909090] font-medium mb-2">The new 15‑inch MacBook Air makes room
                            for more of what you love with a spacious Liquid Retina display.</p>
                        <button
                            className="mt-2 border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white rounded-[6px] w-full">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
