import { NextResponse } from "next/server";
import Product from "@/database/models/Product";
import { connectDB } from "@/database/connection";

export async function GET() {
    try {
        await connectDB();

        const exists = await Product.find();

        // ✅ Poblar solo si vacío
        if (exists.length === 0) {
            console.log("🌱 Populating mock products...");

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

            await Product.insertMany(fakeProducts);
        }

        const products = await Product.find().lean();
        return NextResponse.json(products);

    } catch (err) {
        console.error("❌ Error GET /api/products:", err);
        return NextResponse.json({ error: "Failed to load products" }, { status: 500 });
    }
}
