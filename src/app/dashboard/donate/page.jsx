"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/MapLea"), { ssr: false });

export default function DonatePage() {
    return (
        <div className="flex flex-col gap-4">

            <h2 className="text-lg font-bold text-green-600 text-center">Doação</h2>

            {/* MAP CONTAINER MOBILE */}
            <div className="min-h-[300px] h-[330px] rounded-lg overflow-hidden border">
                <Map />
            </div>

        </div>
    );
}
