import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const lato = Lato({
  subsets: ['latin-ext'],
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  title: "Fechamento de Varanda | Maison do Vidro",
  description: "Reiki Original. Soluções completas em vidros para apartamentos, casas e empresas. Reiki Original só aqui!",
  keywords: ['fechamento de varanda', 'envidraçamento de sacada', 'Reiki Bahia']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="show-banner"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P83VTKB')
`,
          }}
        />

        <Script
          id="pixel-meta"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1559566414773402');
fbq('track', 'PageView')
`,
          }}
        />
      </head>
      <body
        className={lato.className}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P83VTKB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          >
          </iframe>
        </noscript>

        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1559566414773402&ev=PageView&noscript=1"
          /></noscript>

        {children}
      </body>
    </html>
  );
}
