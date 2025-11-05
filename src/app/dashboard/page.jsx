"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DashboardHome() {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api/products")
            .then(r => {
                if (!r.ok) throw new Error("Erro ao carregar produtos");
                return r.json();
            })
            .then(data => setProducts(data))
            .catch(() => setError("Não foi possível carregar produtos 😢"));
    }, []);

    // ✅ LOADING STATE (UI fallback)
    if (!products && !error) {
        return (
            <div className="grid grid-cols-3 gap-2 animate-pulse">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-gray-200 h-32 rounded-lg"></div>
                ))}
            </div>
        );
    }

    // ❌ ERROR STATE
    if (error) {
        return (
            <p className="text-center text-sm text-red-500 font-medium py-4">
                {error}
            </p>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-2">
            {products.map((p) => (
                <div
                    key={p._id}
                    className="bg-white rounded-lg shadow-sm p-2 text-center border border-gray-100"
                >
                    <div className="w-full aspect-square relative rounded-md overflow-hidden bg-gray-100">
                        <Image
                            src={p.image || "/placeholder.jpg"}
                            alt={p.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <p className="text-[11px] font-semibold mt-1 truncate">{p.title}</p>
                    <p className="text-green-600 font-bold text-xs">€{p.price}</p>
                </div>
            ))}
        </div>
    );
}
