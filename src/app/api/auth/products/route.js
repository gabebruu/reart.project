import { NextResponse } from "next/server";

// Exemplo de produtos estáticos (você pode trocar por dados do banco)
const products = [
  {
    _id: "1",
    name: "Escultura Reciclada",
    description: "Feita com metal reutilizado",
    price: 120,
    image: "https://via.placeholder.com/150",
  },
  {
    _id: "2",
    name: "Arte em Papelão",
    description: "Peça artesanal com papelão reciclado",
    price: 90,
    image: "https://via.placeholder.com/150",
  },
  {
    _id: "3",
    name: "Quadro Sustentável",
    description: "Tinta natural e moldura de madeira reaproveitada",
    price: 200,
    image: "https://via.placeholder.com/150",
  },
];

// Rota GET /api/products
export async function GET() {
  try {
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao buscar produtos", error: error.message },
      { status: 500 }
    );
  }
}