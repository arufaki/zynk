import { Bell, House, MessageCircle, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="flex flex-row justify-evenly my-2">
                <Link href="/">
                    <House className="text-gray-700" size={25} />
                </Link>
                <Link href="/friends">
                    <Users className="text-gray-700" size={25} />
                </Link>
                <Link href="/messages">
                    <MessageCircle className="text-gray-700" size={25} />
                </Link>
                <Link href="/notification">
                    <Bell className="text-gray-700" size={25} />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
