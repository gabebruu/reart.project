"use client";

import { useState } from "react";
import Image from "next/image";
import ProductsList from "./components/ProductsList";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#f9f8f7",
        color: "#222",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          backgroundColor: "#fff",
          padding: "16px 20px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "center", // Centraliza o conteúdo
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* LOGOTIPO CENTRALIZADO */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png"
            alt="Logo Reart"
            width={180} // tamanho médio-grande
            height={60}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* BOTÕES LOGIN / SIGN UP — posicionados à direita */}
        <div
          style={{
            position: "absolute",
            right: "20px",
            display: "flex",
            gap: "10px",
          }}
        >
          <button style={smallButton}>Login</button>
          <button style={blackButton}>Sign Up</button>
        </div>
      </header>

      {/* LISTA DE PRODUTOS */}
      <main style={{ flex: 1, padding: "20px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "16px" }}>Coleções</h2>
        <ProductsList />
      </main>

      {/* MENU INFERIOR */}
      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#fff",
          borderTop: "1px solid #eee",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px 0",
          boxShadow: "0 -2px 6px rgba(0,0,0,0.05)",
        }}
      >
        <button
          style={activeTab === "home" ? activeIcon : navIcon}
          onClick={() => setActiveTab("home")}
        >
          🏠
        </button>
        <button
          style={activeTab === "favorites" ? activeIcon : navIcon}
          onClick={() => setActiveTab("favorites")}
        >
          ❤️
        </button>
        <button
          style={activeTab === "donate" ? activeIcon : navIcon}
          onClick={() => setActiveTab("donate")}
        >
          🌍
        </button>
        <button
          style={activeTab === "profile" ? activeIcon : navIcon}
          onClick={() => setActiveTab("profile")}
        >
          👤
        </button>
      </nav>
    </div>
  );
}

// --- ESTILOS ---
const smallButton = {
  background: "none",
  border: "1px solid #ccc",
  borderRadius: "20px",
  padding: "6px 14px",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
};

const blackButton = {
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "20px",
  padding: "6px 14px",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
};

const navIcon = {
  background: "none",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
  color: "#999",
  transition: "color 0.3s",
};

const activeIcon = {
  ...navIcon,
  color: "#222",
};