import { NextResponse } from "next/server";
import Product from "@/database/models/Product";
import { connectDB } from "@/database/connection";

export async function GET() {
    await connectDB();

    const fakeProducts = [
        {
            title: "Camiseta Eco Verde",
            price: 15,
            image: "/mock1.jpg",
            size: "M",
            description: "Feita com algodão reciclado 🌿",
        },
        {
            title: "Casaco Upcycled",
            price: 40,
            image: "/mock2.jpg",
            size: "L",
            description: "Materiais reaproveitados ♻️",
        },
        {
            title: "Bolsa Denim Reciclada",
            price: 25,
            image: "/mock3.jpg",
            size: "Único",
            description: "Produção artesanal ✨",
        },
    ];

    const exists = await Product.find();
    if (exists.length === 0) await Product.insertMany(fakeProducts);

    const products = await Product.find();
    return NextResponse.json(products);
}
