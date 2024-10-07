import Image from 'next/image'
import { WhatsAppButton } from '../ui/WhatsAppButton'

const differentials = [
  {
    title: '26 anos',
    subtitle: 'de tradição',
    image: '/26-anos-tradicao-icon.svg',
    highlighted: 'title',
  },
  {
    title: 'Presente em',
    subtitle: '3.400 cidades',
    image: '/presente-em-cidades-icon.svg',
    highlighted: 'subtitle',
  },
  {
    title: '+350mil',
    subtitle: 'projetos instalados',
    image: '/projetos-instalados-icon.svg',
    highlighted: 'title',
  },
  {
    title: '05 anos',
    subtitle: 'de garantia*',
    image: '/garantia-icon.svg',
    highlighted: 'title',
  },
  {
    title: 'Assist. Técnica',
    subtitle: 'ativa e personalizada',
    image: '/assistencias-icon.svg',
    highlighted: 'title',
  }
]

export function Differentials() {
  return (
    <div className="p-8 bg-primary flex flex-col items-center gap-8 text-white text-center">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl">Você merece o melhor!</h3>
        <h3 className="text-3xl font-black">Reiki só original!</h3>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-3">
        {
          differentials.map((differential, index) => (
            <div key={index} className="text-primary flex gap-3 items-center justify-start bg-white w-full max-w-[450px] p-4">
              <Image src={differential.image} alt={`${differential.title} ${differential.subtitle}`} width={64} height={64} />
              <div className="flex flex-col text-left">
                <span data-highlighted={differential.highlighted} className="text-2xl data-[highlighted=title]:font-black text-primary">{differential.title}</span>
                <span data-highlighted={differential.highlighted} className="text-2xl data-[highlighted=subtitle]:font-black text-primary">{differential.subtitle}</span>
              </div>
            </div>

          ))
        }
      </div>
      <span className="text-white text-center text-lg">*consulte as regras de garantia no nosso site</span>
      <WhatsAppButton color='orange' />
    </div>
  )
}
