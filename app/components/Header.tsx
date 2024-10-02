import Image from 'next/image'

export function Header() {
  return (
    <div className="min-h-[50vh] w-full flex flex-col bg-[url('/bg-hero.png')] bg-cover items-center relative"> <div className="mt-4 flex w-full items-center justify-between gap-3 bg-[#185794] bg-opacity-90 p-6">
      <h1 className="text-2xl leading-8 text-white font-bold w-full max-w-[300px]">Quer o melhor <strong className="text-[#FE9821]">fechamento de varanda</strong> do Brasil?</h1> <Image src="/maison-logo-white.png" alt="Maison do Vidro" width={220} height={77} quality={100} />
    </div>
      <div className="bg-white rounded-2xl flex flex-col justify-center items-center  w-full max-w-[350px] absolute z-10 bottom-[-20px] text-center font-black px-2 py-4">
        <Image src="/pin.svg" alt="Pin" width={15} height={15} className="mt-[-30px]" />
        <span className="text-4xl text-primary">Reiki original</span>
        <Image src="/separator.svg" alt="Separator" width={0} height={0} className="w-full max-w-[300px]" />
        <span className="text-4xl text-orange">SÓ AQUI</span>
      </div>
    </div>)
}
