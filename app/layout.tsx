import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ['latin-ext'],
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  title: "Maison do Vidro",
  description: "Reiki Original só aqui!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={lato.className}
      >
        {children}
      </body>
    </html>
  );
}
