import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({ children }) {
    return (
        <html lang="pt">
            <body className="bg-gray-100">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
