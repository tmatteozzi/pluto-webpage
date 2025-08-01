export default function Bento() {
  return (
    <section className=" w-full flex items-center bg-[#171717] relative overflow-hidden py-12 sm:py-16 md:py-24 leading-tight">
      <div className="w-4xl mx-auto grid grid-cols-1 relative z-10 ">
        <div className="flex gap-2">
          <div className="bg-neutral-900 w-1/3 relative aspect-[2/4] rounded-2xl border border-neutral-800">
            <div className="absolute top-0 left-0 w-full h-full text-white p-8">
              <h3 className="font-bold text-2xl leading-[1]">
                Hablále a Pluto
              </h3>
              <p className="text-base leading-[1.1] mt-2 text-neutral-400">
                Transfiere dinero a tus amigos y familiares sin comisiones.
              </p>
            </div>
          </div>
          <div className="w-2/3 relative flex flex-col gap-2">
            <div className="bg-neutral-900 w-full h-1/2 rounded-2xl relative border border-neutral-800">
              <div className="absolute bottom-0 left-0 w-1/2 text-white p-8">
                <h3 className="font-bold text-2xl leading-[1]">
                  Transferencias
                </h3>
                <p className="text-base leading-[1.1] mt-2 text-neutral-400">
                  Transfiere dinero a tus amigos y familiares sin comisiones.
                </p>
              </div>
            </div>
            <div className="w-full flex gap-2 h-1/2">
              <div className="bg-neutral-900 w-1/2 h-full rounded-2xl relative border border-neutral-800">
                <div className="absolute top-0 left-0 w-full text-white p-8">
                  <h3 className="font-bold text-2xl leading-[1]">Acciones</h3>
                  <p className="text-base leading-[1.1] mt-2 text-neutral-400">
                    Automatiza tus transferencias e inversiones fácilmente.
                  </p>
                </div>
              </div>
              <div className="bg-neutral-900 w-1/2 h-full rounded-2xl relative border border-neutral-800">
                <div className="absolute bottom-0 left-0 w-full text-white p-8">
                  <h3 className="font-bold text-2xl leading-[1]">Grupos</h3>
                  <p className="text-base leading-[1.1] mt-2 text-neutral-400">
                    Crea grupos para organizar gastos y presupuestos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-neutral-900 w-20 h-20"></div> */}
      </div>
    </section>
  );
}
