import Image from "next/image";
import { Header } from "./components/Header";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import { NegativePoints } from "./components/sections/NegativePoints";
import { PositivePoints } from "./components/sections/PositivePoints";
import { Gallery } from "./components/sections/Gallery";
import { DontAcceptImitations } from "./components/sections/DontAcceptImitations";
import { Differentials } from "./components/sections/Differentials";
import { ProTips } from "./components/sections/ProTips";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col items-center gap-3 bg-primary text-center px-6 pt-10 pb-12 relative">
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
    </div>
  )
}
