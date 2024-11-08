import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Financia IA",
  description: "Controle suas finanças de forma simples e eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
