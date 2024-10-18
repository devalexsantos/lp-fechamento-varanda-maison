import Image from "next/image";
import Link from "next/link";

type WhatsAppButtonProps = {
  color: "green" | "orange"
}

export function WhatsAppButton({ color }: WhatsAppButtonProps) {
  return (
    <Link data-color={color} href="https://wa.me/5571999993553" target="_blank" className="flex w-full max-w-[350px] items-center gap-2 justify-center rounded-xl 
      p-4 data-[color=green]:bg-[#22A800] 
      data-[color=orange]:bg-[#FF8B02]
      text-center text-white font-black text-xl">
      <Image src="icon-whatsapp.svg" alt="WhatsApp" width={25} height={25} />
      ORÇAMENTO GRATUITO
    </Link>
  )
}
