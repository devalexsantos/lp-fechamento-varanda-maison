import Image from 'next/image'

export function Header() {
  return (
    <div className="min-h-[50vh] w-full flex flex-col bg-[url('/bg-hero.png')] bg-cover">
      <div className="mt-4 flex gap-3 bg-[#185794] bg-opacity-90 p-6">
        <h1 className="text-2xl leading-8 text-white font-bold w-full">Quer o melhor <strong className="text-[#FE9821]">fechamento de varanda</strong> do Brasil?</h1>
        <Image src="/maison-logo-white.png" alt="Maison do Vidro" width={220} height={77} quality={100} />
      </div>
    </div>
  )
}
