"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductsList() {
  const [products] = useState([
    {
      _id: "1",
      name: "Escultura Reciclada",
      price: 120,
      image: "/mock1.jpg",
    },
    {
      _id: "2",
      name: "Camisa Eco Upcycled",
      price: 60,
      image: "/mock2.jpg",
    },
    {
      _id: "3",
      name: "Bolsa Têxtil Sustentável",
      price: 80,
      image: "/mock3.jpg",
    },
  ]);

  return (
    <div className="grid grid-cols-3 gap-2">
      {products.map((p) => (
        <div key={p._id} className="bg-white rounded-lg shadow-sm p-2 text-center">
          <Image
            src={p.image}
            width={120}
            height={120}
            alt={p.name}
            className="rounded-md w-full h-auto"
          />

          <p className="text-xs font-semibold mt-1">{p.name}</p>
          <p className="text-green-600 font-bold text-sm">€{p.price}</p>
        </div>
      ))}
    </div>
  );
}
