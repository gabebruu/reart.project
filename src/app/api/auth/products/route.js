import { connectDB } from "@/models/connection";
import Product from "@/models/Product";


// Get - fetching all products 
export async function GET() { 
    try { 
        await connectDB();
        const products = await Product.find();
        return Response.json(products, {status: 200});
    } catch (error) {
        console.error("GET /api/products error:", error);
        return Response.json({ error: "Failed to fetch products"}, {status: 500});
    }
}

// POST - Create a new Product
export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();

        const newProduct = await Product.create(body);
        return Response.json(newProduct, {status:201});
    } catch (error) {
        console.error("POST /api/products error:", error);
        return Response.json({ error: "Failed to create product"}, { status: 500 });
    }
}