import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Fechamento de Varanda | Maison do Vidro",
  description:
    "Reiki Original. Soluções completas em vidros para apartamentos, casas e empresas. Reiki Original só aqui!",
  keywords: ["fechamento de varanda", "envidraçamento de sacada", "Reiki Bahia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T9FHG6FW');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={lato.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9FHG6FW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}

