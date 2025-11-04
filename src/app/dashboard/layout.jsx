"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingCart, Heart, User, MapPin, Calculator } from "lucide-react";
import "leaflet/dist/leaflet.css";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();

    const navItems = [
        { href: "/dashboard", label: "Home", icon: Home },
        { href: "/dashboard/cart", label: "Cart", icon: ShoppingCart },
        { href: "/dashboard/donate", label: "Donate", icon: Heart },
        { href: "/dashboard/donate/map", label: "Map", icon: MapPin },
        { href: "/dashboard/donate/calculator", label: "Calculator", icon: Calculator },
        { href: "/dashboard/artist", label: "Artist", icon: User },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">

            {/* Sidebar Desktop */}
            <aside className="hidden md:flex md:flex-col md:w-64 bg-white border-r border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-green-600">♻️ ReArt</h1>
                    <p className="text-sm text-gray-500 mt-1">Sustainable Fashion</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map(({ href, label, icon: Icon }) => {
                        const active = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg ${active ?
                                    "bg-green-100 text-green-700 font-semibold" :
                                    "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <Icon size={20} />
                                <span>{label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
                <header className="md:hidden bg-white border-b p-4 text-lg font-bold text-green-600">
                    ♻️ ReArt
                </header>

                <div className="flex-1 overflow-auto">
                    {children}
                </div>

                {/* Bottom Nav Mobile */}
                <nav className="md:hidden bg-white border-t px-2 py-3 flex items-center justify-around">
                    {navItems.slice(0, 5).map(({ href, label, icon: Icon }) => {
                        const active = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex flex-col items-center ${active ? "text-green-600" : "text-gray-500"}`}
                            >
                                <Icon size={20} />
                                <span className="text-xs">{label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </main>
        </div>
    );
}
