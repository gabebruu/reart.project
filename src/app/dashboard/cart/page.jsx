"use client";
import { useEffect, useState } from "react";

export default function CartPage() {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        fetch("/api/cart")
            .then(res => res.json())
            .then(data => setCart(data));
    }, []);

    if (!cart) return <p>Carregando...</p>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold text-green-600 mb-4">Carrinho 🛍️</h2>

            {cart.items.map(item => (
                <div key={item.productId} className="flex justify-between border-b py-2">
                    <span>{item.name} x {item.quantity}</span>
                    <span>€{(item.price * item.quantity).toFixed(2)}</span>
                </div>
            ))}
        </div>
    );
}
