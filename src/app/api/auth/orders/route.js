import { connectDB } from "@/models/connection";
import Order from "@/models/Order";

// Get - Fetching all the orders 
export async function GET() {
    try {
        await connectDB();
        const orders = await Order.find().populate("userId").populate("items.productId");
        return Response.json(orders, {status: 200 }); 
    } catch (error) {
        console.error("GET /api/orders error:", error);
        return Response.json({ error: "Failed to fetch orders"}, { status: 500});
    }
}

// POST - Create new order 
export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();

        const { userId, items, total, paymentIntentId } = body;

        if (!userId || !items || !total) {
            return Response.json({ error: "Missing required fields"}, {status: 400})
        }

        const newOrder = await Order.create({
            userId,
            items,
            total,
            paymentIntentId,
        });

        return Response.json(newOrder, { status: 201 });
    } catch (error) {
        console.error("POST /api/orders error:", error);
        return Response.json({ error: "Failed to create order"}, {status: 500});
    }
}