import Image from 'next/image'
import { WhatsAppButton } from './ui/WhatsAppButton'
export function Footer() {
  return (
    <footer className="flex flex-col gap-8 items-center text-primary px-4 py-8 mt-8 border-t-2 border-primary">
      <Image src="/logo-maison-blue.jpg" alt="Logo Maison do Vidro" width={300} height={200} />

      <div className="w-full max-w-[764px] flex flex-col gap-4 items-center">
        <p className="text-left md:text-center text-xl">
          Há <strong className="font-black">13 anos</strong> trabalhamos com as melhores marcas e sistemas de envidraçamento do mercado.
          Oferecemos soluções completas em vidros para apartamentos, casas e empresas.
        </p>

        <p className="text-left md:text-center text-xl">
          Sistema Reiki - Esquadrias Roll Door - Box - Espelhos - Guarda Corpo, Vidros Blindex e Habitat e muito mais.
        </p>

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
