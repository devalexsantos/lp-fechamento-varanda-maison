export function ProTips() {
  return (
    <div className="flex flex-col gap-4 px-4 py-12 text-primary">
      <h3 className="text-3xl font-black text-center">Os melhores profissionais indicam <strong className="text-orange">Reiki</strong></h3>
      <div className="flex flex-col gap-4 items-center">
        <h4 className="text-xl font-bold w-full text-center">Dicas de arquitetos</h4>
        <p className="text-xl text-center">Veja alguns exemplos de integração de ambientes com Reiki:</p>
        <div className="flex flex-col gap-4 md:flex-row">

          <iframe
            className="w-full max-w-[764px] h-[315px] md:h-[560px]"
            src="https://www.youtube.com/embed/YXrdYXAgNfc?si=waMEZdVGj7HA1vIg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />

          <iframe
            className="w-full max-w-[764px] h-[315px] md:h-[560px]"
            src="https://www.youtube.com/embed/vg60BLf4Mzc?si=9hA9vgUXO1vAmbMu"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  )
}
