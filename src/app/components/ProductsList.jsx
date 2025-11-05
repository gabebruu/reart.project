"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Dados fictícios para simular o backend
    setProducts([
      {
        _id: "1",
        name: "Escultura Reciclada",
        description: "Feita com metal reutilizado",
        image: "https://via.placeholder.com/300x200",
      },
      {
        _id: "2",
        name: "Arte em Papelão",
        description: "Peça artesanal com papelão reciclado",
        image: "https://via.placeholder.com/300x200",
      },
      {
        _id: "3",
        name: "Quadro Sustentável",
        description: "Moldura feita com madeira reaproveitada",
        image: "https://via.placeholder.com/300x200",
      },
    ]);
  }, []);

  return (
    <div>
    
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}