import artist from "@/data/artist.json";

export default function ArtistPage() {
    return (
        <div className="space-y-3">
            <h2 className="text-xl font-bold text-green-600">Sobre o Artista</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
                {artist.bio}
            </p>
        </div>
    );
}
