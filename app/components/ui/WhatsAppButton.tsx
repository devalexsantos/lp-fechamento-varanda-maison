import Image from "next/image";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <Link href="" target="_blank" className="flex w-full max-w-[350px] items-center gap-2 justify-center rounded-xl p-4 bg-[#22A800] text-center text-white font-black text-xl">
      <Image src="icon-whatsapp.svg" alt="WhatsApp" width={25} height={25} />
      ORÇAMENTO GRATUITO
    </Link>
  )
}
