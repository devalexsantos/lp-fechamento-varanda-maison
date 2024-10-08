import Image from 'next/image'
import Link from 'next/link'

export function ProTips() {
  return (
    <div className="flex flex-col gap-4 px-4 py-12 text-primary">
      <h3 className="text-3xl font-black text-center">Os melhores profissionais indicam <strong className="text-orange">Reiki</strong></h3>
      <div className="flex flex-col gap-4 items-center">
        <h4 className="text-xl font-bold w-full text-center">Dicas de arquitetos</h4>
        <p className="text-xl text-center">Veja alguns exemplos de integração de ambientes com Reiki:</p>
        <div className="flex flex-col gap-4 md:flex-row">

          <Link href="https://youtu.be/YXrdYXAgNfc" target="_blank">
            <Image src="/dicas-de-arquitetos-1.png" alt="Dicas de arquitetos" width={350} height={145} />
          </Link>

          <Link href="https://youtu.be/vg60BLf4Mzc" target="_blank">
            <Image src="/dicas-de-arquitetos-2.png" alt="Dicas de arquitetos" width={350} height={145} />
          </Link>
        </div>
      </div>
    </div>
  )
}
