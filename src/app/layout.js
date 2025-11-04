// src/app/layout.jsx
import "./globals.css";

export const metadata = {
    title: "ReArt",
    description: "Sustainable recycled fashion marketplace",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gray-50">
                {children}
            </body>
        </html>
    );
}
