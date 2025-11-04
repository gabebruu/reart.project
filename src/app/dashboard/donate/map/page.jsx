"use client";

import dynamic from "next/dynamic";

const MapLea = dynamic(() => import("@/components/MapLea"), {
    ssr: false,
});

export default function MapPage() {
    return (
        <div className="h-full w-full flex flex-col">
            <div className="p-4 text-lg font-semibold md:hidden">
                Mapa de Recolha ♻️
            </div>

            <MapLea />
        </div>
    );
}