import Image from "next/image";
import { Header } from "./components/Header";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import { NegativePoints } from "./components/sections/NegativePoints";
import { PositivePoints } from "./components/sections/PositivePoints";
import { Gallery } from "./components/sections/Gallery";
import { DontAcceptImitations } from "./components/sections/DontAcceptImitations";
import { Differentials } from "./components/sections/Differentials";
import { ProTips } from "./components/sections/ProTips";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col items-center gap-3 bg-primary text-center px-6 pt-10 pb-12">
        <div className="mt-[-70px] z-10 bg-white rounded-2xl flex flex-col justify-center items-center  w-full max-w-[300px] text-center font-black px-2 py-4">
          <Image src="/pin.svg" alt="Pin" width={15} height={15} className="mt-[-30px]" />
          <span className="text-4xl text-primary">Reiki original</span>
          <Image src="/separator.svg" alt="Separator" width={0} height={0} className="w-full max-w-[300px]" />
          <span className="text-4xl text-orange">SÓ AQUI</span>
        </div>

        <span className="text-3xl text-white text-center w-full max-w-[350px]">Somos a única empresa autorizada na Bahia</span>
        <WhatsAppButton color="green" />
        <Image src="/arrow-down.svg" alt="Arrow Down" width={50} height={50} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-30px]" />
      </div>
      <NegativePoints />
      <PositivePoints />
      <Gallery />
      <DontAcceptImitations />
      <Differentials />
      <ProTips />
      <Footer />
    </div>
  )
}
