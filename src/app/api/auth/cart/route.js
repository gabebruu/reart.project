import { NextResponse } from "next/server";

/**
 * Rotas simples de carrinho mantidas em memória (exemplo).
 * Em produção use sessão, Redis ou persistência por usuário.
 */

let CART = [];

export async function GET() {
  return NextResponse.json(CART);
}

export async function POST(req) {
  const body = await req.json(); // { productId, title, price, quantity }
  const found = CART.find((i) => i.productId === body.productId);
  if (found) {
    found.quantity += body.quantity || 1;
  } else {
    CART.push({ ...body, quantity: body.quantity || 1 });
  }
  return NextResponse.json(CART, { status: 201 });
}

export async function DELETE(req) {
  // aceitar body com productId ou limpar todo carrinho
  const url = new URL(req.url);
  const productId = url.searchParams.get("productId");
  if (!productId) {
    CART = [];
    return NextResponse.json({ ok: true });
  }
  CART = CART.filter((i) => i.productId !== productId);
  return NextResponse.json(CART);
}