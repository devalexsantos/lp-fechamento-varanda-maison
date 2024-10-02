import Image from "next/image";
import { Header } from "./components/Header";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col items-center gap-3 bg-primary text-center px-6 pt-10 pb-12 relative">
        <span className="text-3xl text-white text-center w-full max-w-[350px]">Somos a única empresa autorizada na Bahia</span>
        <WhatsAppButton />
        <Image src="/arrow-down.svg" alt="Arrow Down" width={50} height={50} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-30px]" />
      </div>

      <div className="flex flex-col gap-12 items-center px-2 pt-8 pb-12 bg-[url('/bg-features.png')] bg-cover border-b-8 border-b-[#063A6C]">
        <div className="w-full max-w-[350px] text-white text-center bg-primary opacity-80 mt-6 p-4 rounded-2xl border-4 border-primary shadow-lg">
          <span className="text-3xl text-center text-white font-black">Aproveita pouco sua varanda? </span>
        </div>

        <div className="w-full flex flex-col gap-3 max-w-[350px] text-white bg-primary opacity-80 mt-6 p-4 rounded-2xl border-4 border-primary shadow-lg">
          <div className="flex items-center gap-3">
            <Image src="/x-plus-icon.svg" width={44} height={45} alt="X" />
            <span className="text-2xl text-white font-bold">
              Chuva e Vento
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Image src="/x-plus-icon.svg" width={44} height={45} alt="X" />
            <span className="text-2xl text-white font-bold">
              Ambiente desagradável
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Image src="/x-plus-icon.svg" width={44} height={45} alt="X" />
            <span className="text-2xl text-white font-bold">
              Falta de integração com a sala
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
