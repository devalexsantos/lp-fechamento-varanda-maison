"use client";
import Image from 'next/image'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrows'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { WhatsAppButton } from '../ui/WhatsAppButton';


const galleryImages = [
  {
    src: "/galeria-maison-01.jpg",
  },
  {
    src: "/galeria-maison-02.jpg",
  },
  {
    src: "/galeria-maison-03.jpg",
  },
  {
    src: "/galeria-maison-04.jpg",
  },
]


export function Gallery() {
  const options: EmblaOptionsType = { loop: true }

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)


  return (
    <div className="flex flex-col items-center gap-8 px-8 py-12 bg-primary">
      <div className="embla relative">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {galleryImages.map((image, index) => (
              <div className="embla__slide" key={index}>
                <Image src={image.src} alt="Fechamento de Varanda - Maison do Vidro" width={500} height={500} className="w-full h-full rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <span className="text-white text-2xl text-center">Confira no vídeo abaixo o <strong>fácil manuseio</strong> e <strong>abertura total</strong> das lâminas de vidro</span>
      <WhatsAppButton color="orange" />
    </div>
  )
}
