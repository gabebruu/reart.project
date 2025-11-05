import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";
import Cart from "@/database/models/Cart";
import { authOptions } from "../auth/[...nextauth]/route";

async function connectDB() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGODB_URI);
    }
}

export async function GET(req) {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const cart = await Cart.findOne({ userId: session.user.email });
    return NextResponse.json(cart || { userId: session.user.email, items: [] });
}

export async function POST(req) {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { productId, name, price, image } = body;

    let cart = await Cart.findOne({ userId: session.user.email });

    if (!cart) {
        cart = await Cart.create({
            userId: session.user.email,
            items: [{ productId, name, price, image, quantity: 1 }]
        });
    } else {
        const item = cart.items.find((i) => i.productId === productId);
        if (item) item.quantity += 1;
        else cart.items.push({ productId, name, price, image, quantity: 1 });

        await cart.save();
    }

    return NextResponse.json(cart);
}

export async function DELETE(req) {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    const cart = await Cart.findOne({ userId: session.user.email });
    if (!cart) return NextResponse.json({ error: "Cart empty" });

    cart.items = cart.items.filter((i) => i.productId !== productId);
    await cart.save();

    return NextResponse.json(cart);
}
