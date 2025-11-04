"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

const userIcon = L.icon({
    iconUrl: "/eco_marker.png",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
});

// Recycle points data (Portugal)
const recyclingPoints = [
    { id: 1, name: "Humana Lisboa - Saldanha", position: [38.732581, -9.140441] },
    { id: 2, name: "Humana Lisboa - Alameda", position: [38.736157, -9.137889] },
    { id: 3, name: "Humana Porto - Santa Catarina", position: [41.149956, -8.605317] },
    { id: 4, name: "Re-use Market Cascais", position: [38.697550, -9.421506] },
    { id: 5, name: "Eco Textile Point Lisboa", position: [38.716670, -9.139590] }
];

export default function MapLea() {
    const defaultCenter = [38.736946, -9.142685]; // Lisboa
    const [userLocation, setUserLocation] = useState(defaultCenter);

    // Get user location
    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setUserLocation([pos.coords.latitude, pos.coords.longitude]);
            },
            () => {
                console.log("🟡 Falló ubicación — usando Lisboa 🇵🇹");
            }
        );
    }, []);

    return (
        <div className="w-full h-[calc(100vh-90px)] md:h-screen">
            <MapContainer
                center={userLocation}
                zoom={13}
                scrollWheelZoom
                className="h-full w-full rounded-lg overflow-hidden"
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* User */}
                <Marker position={userLocation} icon={userIcon}>
                    <Popup>Estás aquí 📍</Popup>
                </Marker>

                {/* Recycling points */}
                {recyclingPoints.map(point => (
                    <Marker key={point.id} position={point.position}>
                        <Popup>{point.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
