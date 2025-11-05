"use client";

import { useState } from "react";

export default function ProductCard({ product }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => setFavorite(!favorite)}>
        {favorite ? "❤️ Favorito" : "🤍 Favoritar"}
      </button>
    </div>
  );
}