'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/images/navbar/e-commerce-logo.png"
import {Heart, Menu, Search, ShoppingCart, User, X} from "lucide-react";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Colors} from "@/constants/Colors";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="min-w-full fixed top-0 z-50 shadow-lg" style={{backgroundColor: Colors.white}}>
            <div className="container mx-auto px-4 md:px-20 lg:max-w-[1000px] 2xl:max-w-[1300px]">
                {/* Grid Layout for Desktop */}
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-0 sm:gap-10 py-4">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={96}
                            height={32}
                            className="w-[96px] h-8"
                        />
                    </Link>

                    {/* Search Bar */}
                    <div className="relative hidden xl:block">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2"
                            size={24}
                            style={{color: Colors.searchIcon}}
                        />
                        <Input
                            type="text"
                            placeholder="Search..."
                            className="pl-12 pr-4 py-3 rounded-md w-full focus:outline-none placeholder:text-sm placeholder:font-medium"
                            style={{backgroundColor: Colors.searchBarBg, color: Colors.searchBarText}}
                        />
                    </div>

                    {/* Navigation Links and Icons */}
                    <div className="hidden xl:flex items-center gap-10">
                        <nav className="flex gap-10">
                            <Link href="/" className="text-base font-medium hover:text-black"
                                  style={{color: Colors.black}}
                            >
                                Home
                            </Link>
                            <Link href="/about" className="text-gray-400 text-base font-medium hover:text-black"
                            >
                                About
                            </Link>
                            <Link href="/contact" className="text-gray-400 text-base font-medium hover:text-black"
                            >
                                Contact Us
                            </Link>
                            <Link href="/blog" className="text-gray-400 text-base font-medium hover:text-black"
                            >
                                Blog
                            </Link>
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
                                <User className="text-black hover:text-black cursor-pointer" size={32} strokeWidth={1}/>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="xl:hidden justify-self-end">
                        {isMenuOpen ? (
                            <X className="text-black cursor-pointer" size={32} strokeWidth={1}/>
                        ) : (
                            <Menu className="text-black cursor-pointer" size={32} strokeWidth={1}/>
                        )}
                    </button>
                </div>

                {/* Dropdown Menu for Mobile */}
                {isMenuOpen && (
                    <div className="xl:hidden bg-white z-50 shadow-lg mt-4 p-6">
                        <div className="flex flex-col gap-6">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#989898]"
                                        size={24}/>
                                <Input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-12 pr-4 py-4 bg-[#F5F5F5] text-[#656565] rounded-md w-full focus:outline-none placeholder:text-sm placeholder:font-medium"
                                />
                            </div>

                            <nav className="flex flex-col gap-4">
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
                )}
            </div>
        </header>
    );
}