"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DashboardHome() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then(r => r.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-2">
            {products.map((p) => (
                <div key={p._id} className="bg-white rounded-lg shadow-sm p-2 text-center">
                    <Image
                        src={p.image}
                        width={150}
                        height={150}
                        alt={p.title}
                        className="rounded-md w-full h-auto"
                    />
                    <p className="text-xs font-semibold mt-1">{p.title}</p>
                    <p className="text-green-600 font-bold text-sm">€{p.price}</p>
                </div>
            ))}
        </div>
    );
}
