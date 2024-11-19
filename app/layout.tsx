import type { Metadata } from "next";
import "./globals.css";

//fonts
import { Mulish } from 'next/font/google'

//context
import { AppUtils } from "./context/utils";

export const metadata: Metadata = {
  title: "Financia IA",
  description: "Controle suas finanças de forma simples e eficiente.",
};

const mulish = Mulish({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${mulish.className} dark antialiased`}
      >
        <AppUtils>
          {children}
          {/* <Toaster /> */}
        </AppUtils>
      </body>
    </html>
  );
}
