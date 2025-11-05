"use client";
import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-xl p-3 shadow-sm flex flex-col gap-2">

            <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-32 object-cover rounded-md"
                unoptimized
            />

            <h3 className="text-sm font-semibold truncate">{product.name}</h3>

            <p className="text-green-600 font-bold text-sm">€{product.price}</p>

            <button className="bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition">
                Adicionar ao Carrinho
            </button>
        </div>
    );
}
