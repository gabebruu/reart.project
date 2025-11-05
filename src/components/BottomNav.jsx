"use client";

import Link from "next/link";
import { ShoppingCart, User, Heart } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BottomNav() {
    const pathname = usePathname();

    const links = [
        { href: "/dashboard/cart", icon: ShoppingCart, label: "Carrinho" },
        { href: "/dashboard/artist", icon: User, label: "Sobre" },
        { href: "/dashboard/donate", icon: Heart, label: "Doar" },
    ];

    return (
        <nav className="bg-white border-t px-4 py-2 flex justify-around text-xs font-medium fixed bottom-0 left-0 w-full max-w-[390px] mx-auto z-50">
            {links.map(({ href, icon: Icon, label }) => (
                <Link
                    key={href}
                    href={href}
                    className={`flex flex-col items-center ${pathname === href ? "text-green-600 font-bold" : "text-gray-500"
                        }`}
                >
                    <Icon size={22} />
                    {label}
                </Link>
            ))}
        </nav>
    );
}
