import { NextResponse } from "next/server";
import Product from "@/database/models/Product";
import { connectDB } from "@/database/connection";

export async function GET() {
    try {
        await connectDB();

        const exists = await Product.find();

        if (exists.length === 0) {
            const fakeProducts = [
                {
                    title: "Vestido de Plastico Reciclado",
                    price: 15,
                    image: "/mock1.jpg",
                    size: "M",
                    description: "Feita com algodão reciclado 🌿",
                },
                {
                    title: "Vestido de Latas Reutilizadas",
                    price: 40,
                    image: "/mock2.jpg",
                    size: "L",
                    description: "Materiais reaproveitados ♻️",
                },
                {
                    title: "Saia de Papel Upcycled",
                    price: 25,
                    image: "/mock3.jpg",
                    size: "Único",
                    description: "Produção artesanal ✨",
                },
            ];

            await Product.insertMany(fakeProducts);
        }

        const products = await Product.find().lean();
        return NextResponse.json(products);

    } catch (err) {
        console.error("❌ Error GET /api/products:", err);
        return NextResponse.json({ error: "Failed to load products" }, { status: 500 });
    }
}
