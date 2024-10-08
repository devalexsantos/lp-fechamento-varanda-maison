import Image from 'next/image'

export function Header() {
  return (
    <div className="min-h-[60vh] w-full flex flex-col bg-[url('/bg-hero.png')] md:bg-[url('/bg-header.jpg')] bg-cover items-center relative">
      <div className="mt-4 flex md:flex-col w-full items-center justify-between gap-3 bg-[#185794] bg-opacity-90 md:bg-opacity-0 p-6">
        <h1 className="text-2xl md:text-4xl leading-8 text-white font-bold w-full max-w-[300px] md:max-w-[800px]">Quer o melhor <strong className="text-[#FE9821]">fechamento de varanda</strong> do Brasil?</h1>
        <Image src="/maison-logo-white.png" alt="Maison do Vidro" width={220} height={77} quality={100} />
      </div>
    </div>)
}
