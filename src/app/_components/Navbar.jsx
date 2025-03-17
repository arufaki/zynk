"use client";

import { Bell, House, MessageCircle, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { href: "/", icon: House },
        { href: "/friends", icon: Users },
        { href: "/messages", icon: MessageCircle },
        { href: "/notification", icon: Bell },
    ];

    return (
        <nav>
            <div className="flex flex-row justify-evenly mt-2">
                {navItems?.map(({ href, icon: Icon }) => (
                    <Link href={href} key={href} className="relative flex flex-col items-center w-full pb-2 transition-all duration-300">
                        <Icon size={25} className={`text-gray-700 transition-all duration-300 ${pathname === href ? "text-gray-700" : "opacity-60"}`} />
                        <span className={`absolute bottom-0 w-23 h-1 bg-gray-700 rounded-full transition-all duration-300 ${pathname === href ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}></span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
