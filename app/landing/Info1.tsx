import Image from "next/image";

export default function Info1() {
  return (
    <section className="min-h-screen w-full flex items-center relative overflow-hidden py-8 sm:py-0 leading-tight">
      <div className="w-3xl mx-auto relative flex items-center justify-between gap-12">
        <div className="flex items-center justify-between w-1/2 h-full relative bg-neutral-900 rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-transparent to-neutral-900"></div>
          <Image
            src="/mock-speaker.png"
            alt="Pluto Logo"
            width={1000}
            height={1000}
            className="h-full"
          />
        </div>
        <div className="flex flex-col items-start justify-between w-1/2 h-full">
          <h1 className="text-5xl md:text-2xl lg:text-2xl text-left font-[600] text-white mb-2 tracking-tight leading-[1]">
            Talk to Pluto in your smartphone
          </h1>
          <p className="text-base leading-[1.2] text-neutral-400 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ipsam recusandae explicabo molestias placeat facere
            dicta accusamus unde.
          </p>
          <button className="bg-white text-black px-4 py-2 rounded-2xl font-medium mt-4">
            Download the app
          </button>
        </div>
      </div>
    </section>
  );
}
