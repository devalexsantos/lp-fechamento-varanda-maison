import Image from 'next/image'


const negativePoints = [
  'Pouca durabilidade e sem garantia',
  'Baixa qualidade e difícil manuseio',
  'Fora das normas de segurança',
  'Assistência técnica precária ou inexistente',
  'Falta ou dificuldade de peças de reposição',
  'Falta de design e modernidade'
]


export function DontAcceptImitations() {
  return (
    <div className="p-8 text-primary flex flex-col items-center gap-10">
      <div className="flex flex-col items-center">
        <Image src="/triangle-alert.svg" alt="Alert" width={80} height={80} />
        <span className="text-primary text-4xl font-black text-center">Não aceite</span>
        <Image src="/separator.svg" alt="Separator" width={0} height={0} className="w-full max-w-[300px]" />
        <span className="text-primary text-4xl font-black text-center">Imitações</span>
      </div>

      <h3 className="text-3xl text-primary text-center">Quando você olha apenas preço e opta por empresas que oferecem sistemas "tipo Reiki", acontece o seguinte:</h3>

      <div className="flex flex-col items-start md:items-center gap-3 w-full">
        {
          negativePoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <Image src="/x-plus-icon.svg" alt="X" width={44} height={44} />
              <span className="text-2xl">{point}</span>
            </div>
          ))
        }
      </div>

    </div>
  )
}
