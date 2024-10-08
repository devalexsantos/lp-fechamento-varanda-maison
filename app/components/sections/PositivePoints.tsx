import Image from 'next/image'

const positivePoints = [
  "Abertura total de 100% das lâminas de vidro com fácil manuseio.",
  "Vedação contra: ruídos externos, salitre, poluição, chuvas e ventos.",
  "Aproveitar mais a sua varanda independente do clima favorável.",
  "Ganhar uma varanda gourmet para confraternizar com sua família e receber amigos.",
  "Integração da varanda com a sala, ganhando muito mais espaço e conforto."
]

export function PositivePoints() {
  return (
    <div className="flex flex-col bg-white px-4 pt-8 pb-12 gap-8">
      <h2 className="text-center text-3xl text-primary">Alguns {' '}
        <strong className="font-black text-orange">benefícios</strong> {' '}
        de fazer o <strong>fechamento da sua varanda</strong> com {' '}
        <strong className="font-black text-orange">Reiki</strong>
      </h2>
      <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-8 ">
        {
          positivePoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center gap-2 bg-primary px-8 py-4 rounded-2xl shadow-2xl max-w-[400px]">
              <Image src="/check-circle.svg" alt="Check Circle" width={44} height={44} />
              <span className="text-white font-black text-2xl text-center">
                {point}
              </span>
            </div>
          ))
        }
      </div>

    </div>

  )
}
