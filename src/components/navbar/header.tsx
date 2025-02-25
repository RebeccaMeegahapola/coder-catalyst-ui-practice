import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/navbar/e-commerce-logo.png"
import {Heart, Search, ShoppingCart, User} from "lucide-react";
import {Input} from "@/components/ui/input";

export const Header = () => {
    return (
        <header className="bg-white py-4 px-10">
            <div className="container mx-auto flex items-center justify-center gap-8 px-4">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={96}
                        height={32}
                        className="w-[96px] h-8"
                    />
                </Link>
                <div className="relative max-w-md hidden md:block">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#989898]" size={24}/>
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="pl-12 pr-4 py-4 bg-[#F5F5F5] rounded-md w-[433px] focus:outline-none placeholder:text-sm placeholder:font-medium"
                    />
                </div>
                <div className="flex items-center gap-10">
                    <nav className="hidden md:flex gap-[52px]">
                        <Link href="/" className="text-black text-base font-medium hover:text-black">Home</Link>
                        <Link href="/about" className="text-gray-400 text-base font-medium hover:text-black">About</Link>
                        <Link href="/contact" className="text-gray-400 text-base font-medium hover:text-black">Contact Us</Link>
                        <Link href="/blog" className="text-gray-400 text-base font-medium hover:text-black">Blog</Link>
                    </nav>
                    <div className="flex gap-6">
                        <Link href="/favourite">
                            <Heart className="text-black hover:text-black cursor-pointer" size={32} strokeWidth={1}/>
                        </Link>
                        <Link href="/cart">
                            <ShoppingCart className="text-black hover:text-black cursor-pointer" size={32} strokeWidth={1}/>
                        </Link>
                        <Link href="/sign-in">
                            <User className="text-black hover:text-black cursor-pointer" size={32} strokeWidth={1}/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}