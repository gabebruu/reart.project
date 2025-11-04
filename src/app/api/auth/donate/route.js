import { connectDB } from "@/models/connection";
import Donate from "@/models/Donate";

// GET - Fetch all donations (admin or stats)

export async function GET() {
    try { 
        await connectDB();
        const donations = await Donate.find().populate("userId");
        return Response.json(donations, { status: 200 });
    } catch (error) {
        console.error("GET /api/donate error:", error);
        return Response.json({ error: "Failed to fetch donations" }, { status: 500 })
    }
}

// POST - Add or update a user's donation
export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();
        const { userId, itemsDonated } = body;

        if (!userId || !itemsDonated) {
            return Response.json(
                { error: "User ID and number of donated items are required"},
                { status: 400 }
            );
        }

        // check if user already donated before
        const existingDonation = await Donate.findOne({ userId });

        if (existingDonation) {
            const totalItems = existingDonation.itemsDonated + itemsDonated;

            if (totalItems > 25) {
                return Response.json(
                    { error: "Donation limit reached (max 25 items per user)" },
                    { status: 400 }
                );
            }

            existingDonation.itemsDonated = totalItems;
            existingDonation.discountEarned = Math.min(totalItems * 2, 50);
            await existingDonation.save();

            return Response.json(existingDonation, { status: 200 });
        }

        // First-time Donation 
        const newDonation = await Donate.create({ userId, itemsDonated });
        return Response.json(newDonation, { status: 201 });
    } catch (error) {
        console.error("POST /api/donate error:", error);
        return Response.json({ error: "Failed to record donation"}, { status: 500});
    }
}