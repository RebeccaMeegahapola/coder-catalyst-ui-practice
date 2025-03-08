'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/navbar/e-commerce-logo.png"
import {Heart, Menu, Search, ShoppingCart, User, X} from "lucide-react";
import {Input} from "@/components/ui/input";
import {useState} from "react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white py-1 min-w-full fixed top-0 z-50 shadow-lg">
            <div className="w-full 2xl:max-w-[1320px] mx-auto px-[25px] lg:px-[100px] 2xl:px-[80px]">
                <div className="flex justify-between items-center gap-8 py-4">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={96}
                            height={32}
                            className="w-[96px] h-8"
                        />
                    </Link>

                    <button onClick={toggleMenu} className="xl:hidden">
                        {isMenuOpen ? (
                            <X className="text-black cursor-pointer" size={32} strokeWidth={1}/>
                        ) : (
                            <Menu className="text-black cursor-pointer" size={32} strokeWidth={1}/>
                        )}
                    </button>

                    {/*Dropdown menu for medium and small devices*/}
                    {isMenuOpen && (
                        <div className="absolute top-16 left-0 right-0 bg-white z-50 shadow-lg xl:hidden m-10 p-3">
                            <div className="flex flex-col gap-6 p-6">
                                <div className="relative max-w-md">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#989898]"
                                            size={24}/>
                                    <Input
                                        type="text"
                                        placeholder="Search..."
                                        className="pl-12 pr-4 py-4 bg-[#F5F5F5] text-[#656565] rounded-md w-fit md:w-full xl:w-[433px] focus:outline-none placeholder:text-sm placeholder:font-medium placeholder:text-[#656565]"
                                    />
                                </div>

                                <nav
                                    className="flex flex-col gap-4">
                                    <Link href="/" className="text-black text-base font-medium hover:text-black">Home</Link>
                                    <Link href="/about"
                                          className="text-gray-400 text-base font-medium hover:text-black">About</Link>
                                    <Link href="/contact" className="text-gray-400 text-base font-medium hover:text-black">Contact
                                        Us</Link>
                                    <Link href="/blog"
                                          className="text-gray-400 text-base font-medium hover:text-black">Blog</Link>
                                </nav>

                                <div className="flex flex-row justify-between xl:flex-col gap-6">
                                    <Link href="/favourite">
                                        <Heart className="text-black hover:text-black cursor-pointer" size={32}
                                               strokeWidth={1}/>
                                    </Link>
                                    <Link href="/cart">
                                        <ShoppingCart className="text-black hover:text-black cursor-pointer" size={32}
                                                      strokeWidth={1}/>
                                    </Link>
                                    <Link href="/sign-in">
                                        <User className="text-black hover:text-black cursor-pointer" size={32}
                                              strokeWidth={1}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/*Desktop */}
                    <div className="hidden xl:flex items-center gap-10">
                        <div className="relative max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#989898]"
                                    size={24}/>
                            <Input
                                type="text"
                                placeholder="Search..."
                                className="pl-12 pr-4 py-3 bg-[#F5F5F5] text-[#656565] rounded-md w-[433px] focus:outline-none placeholder:text-sm placeholder:font-medium"
                            />
                        </div>
                        <nav
                            className="flex gap-10">
                            <Link href="/" className="text-black text-base font-medium hover:text-black">Home</Link>
                            <Link href="/about"
                                  className="text-gray-400 text-base font-medium hover:text-black">About</Link>
                            <Link href="/contact" className="text-gray-400 text-base font-medium hover:text-black">Contact
                                Us</Link>
                            <Link href="/blog"
                                  className="text-gray-400 text-base font-medium hover:text-black">Blog</Link>
                        </nav>
                        <div className="flex gap-6">
                            <Link href="/favourite">
                                <Heart className="text-black hover:text-black cursor-pointer" size={32}
                                       strokeWidth={1}/>
                            </Link>
                            <Link href="/cart">
                                <ShoppingCart className="text-black hover:text-black cursor-pointer" size={32}
                                              strokeWidth={1}/>
                            </Link>
                            <Link href="/sign-in">
                                <User className="text-black hover:text-black cursor-pointer" size={32}
                                      strokeWidth={1}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}