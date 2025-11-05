import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { ShoppingCart, User, Heart } from "lucide-react";

export default async function DashboardLayout({ children }) {
    const session = await getServerSession(authOptions);

    // Redirect to login if not authenticated
    if (!session) redirect("/");

    return (
        <div className="min-h-screen w-full bg-gray-200 flex items-center justify-center p-2">

            {/* Container */}
            <div className="bg-white w-full max-w-[390px] min-h-screen shadow-xl rounded-2xl overflow-hidden flex flex-col">

                {/* Header */}
                <header className="bg-white shadow px-4 py-4 text-center font-bold text-green-600 text-xl">
                    ReArt ♻️
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-3">
                    {children}
                </main>

                {/* Bottom Navbar */}
                <nav className="bg-white border-t p-2 flex justify-around text-sm font-medium">

                    <Link href="/dashboard/cart" className="flex flex-col items-center text-gray-600 hover:text-green-600">
                        <ShoppingCart size={22} />
                        <span className="text-xs">Carrinho</span>
                    </Link>

                    <Link href="/dashboard/artist" className="flex flex-col items-center text-gray-600 hover:text-green-600">
                        <User size={22} />
                        <span className="text-xs">Sobre</span>
                    </Link>

                    <Link href="/dashboard/donate" className="flex flex-col items-center text-gray-600 hover:text-green-600">
                        <Heart size={22} />
                        <span className="text-xs">Doar</span>
                    </Link>

                </nav>

            </div>
        </div>
    );
}
