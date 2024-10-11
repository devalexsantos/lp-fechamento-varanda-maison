import Image from 'next/image'
import { WhatsAppButton } from './ui/WhatsAppButton'
export function Footer() {
  return (
    <footer className="flex flex-col gap-8 items-center bg-primary text-white px-4 py-12 mt-8 border-t-2 border-primary">
      <Image src="/logo-maison-white-high.png" alt="Logo Maison do Vidro" width={300} height={200} />

      <div className="w-full max-w-[764px] flex flex-col gap-8 items-center">
        <p className="text-left md:text-center text-xl">
          Há <strong className="font-black">14 anos</strong> trabalhamos com as melhores marcas{' '}
          e sistemas de envidraçamento do mercado.
        </p>


        <p className="text-left md:text-center text-xl">
          Oferecemos soluções completas em vidros para apartamentos, casas e empresas.
        </p>

        <div className="flex gap-4">
          <Image src="/logos-partners-reiki/logo-reiki-blue.png" alt="Reiki" width={200} height={200} quality={100} />
          <Image src="/logos-partners-reiki/logo-blindex.png" alt="Blindex" width={200} height={200} quality={100} />
          <Image src="/logos-partners-reiki/logo-roll-door.png" alt="Roll Door" width={200} height={200} quality={100} />
        </div>

        <div className="flex flex-col gap-2">
          <span className="flex gap-2 items-center text-xl">
            <Image src="/check-green.svg" alt="Check" width={24} height={24} quality={100} />
            Fechamento de varanda Reiki
          </span>

          <span className="flex gap-2 items-center text-xl">
            <Image src="/check-green.svg" alt="Check" width={24} height={24} quality={100} />
            Esquadrias de alto padrão Roll Door
          </span>

          <span className="flex gap-2 items-center text-xl">
            <Image src="/check-green.svg" alt="Check" width={24} height={24} quality={100} />
            Box e Espelhos especiais
          </span>

          <span className="flex gap-2 items-center text-xl">
            <Image src="/check-green.svg" alt="Check" width={24} height={24} quality={100} />
            Guarda Corpo, Telhado de vidro e muito mais
          </span>

          <span className="flex gap-2 items-center text-xl">
            <Image src="/check-green.svg" alt="Check" width={24} height={24} quality={100} />
            Vidros  Blindex e Habiat
          </span>

        </div>

        <div className="w-full flex flex-col gap-3 mb-8">
          <span className="w-full text-left md:text-center font-black text-xl">Endereços:</span>

          <span className="w-full text-left md:text-center text-xl">
            - Loja: Shopping Boulevard, 161 Itaigara, Salvador - BA
          </span>
          <span className="w-full text-left md:text-center text-xl">
            - Fábrica: Rua Araújo Bastos, 27 Pituaçu, Salvador - BA
          </span>
        </div>

        <WhatsAppButton color="green" />
      </div>
    </footer>
  )
}
