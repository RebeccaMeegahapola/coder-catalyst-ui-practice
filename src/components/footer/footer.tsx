import Image from "next/image";
import logo from "../../../public/assets/images/navbar/footer-logo.png";
import twitter from "../../../public/assets/images/social-icons/Twitter.png";
import facebook from "../../../public/assets/images/social-icons/Facebook.png";
import tiktok from "../../../public/assets/images/social-icons/Tiktok.png";
import instagram from "../../../public/assets/images/social-icons/Instagram.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black min-w-full py-20">
            <div className="container mx-auto px-4 md:px-20 lg:max-w-[1000px] 2xl:max-w-[1300px]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
                    <div className="mb-8 md:mb-4 flex flex-col items-center lg:items-start">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={96}
                                height={32}
                                className="w-[96px] h-8"
                            />
                        </Link>
                        <p className="text-[#CFCFCF] text-sm font-medium mt-8">
                            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
                        </p>
                    </div>

                    <div className="mb-8 md:mb-4 flex flex-col items-center lg:items-start">
                        <h3 className="text-base font-semibold text-white mb-4">Services</h3>
                        <ul className="text-[#CFCFCF] text-sm font-normal">
                            <li className="mb-3">Bonus program</li>
                            <li className="mb-3">Gift cards</li>
                            <li className="mb-3">Credit and payment</li>
                            <li className="mb-3">Service contracts</li>
                            <li className="mb-3">Non-cash account</li>
                            <li className="mb-3">Payment</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-base font-semibold text-white mb-4">Assistance to the buyer</h3>
                        <ul className="text-[#CFCFCF] text-sm font-normal">
                            <li className="mb-3">Find an order</li>
                            <li className="mb-3">Terms of delivery</li>
                            <li className="mb-3">Exchange and return of goods</li>
                            <li className="mb-3">Guarantee</li>
                            <li className="mb-3">Frequently asked questions</li>
                            <li className="mb-3">Terms of use of the site</li>
                        </ul>
                    </div>
                </div>


                <div className="mt-8 pt-8 flex justify-center lg:justify-start items-center gap-8">
                    <Link href="/">
                        <Image
                            src={twitter}
                            alt="twitter"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src={facebook}
                            alt="facebook"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src={tiktok}
                            alt="tiktok"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src={instagram}
                            alt="instagram"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}