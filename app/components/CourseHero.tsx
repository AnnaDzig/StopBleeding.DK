import Image from "next/image";

export default function CourseHero() {
  return (
    <section className="relative  overflow-hidden bg-[#eef3f4] px-6 pt-32 pb-20 text-[#30445a] md:pt-40 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center opacity-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#c92736]">
            Kursus og produkt
          </p>

          <h1 className="max-w-2xl text-4xl font-bold uppercase leading-tight md:text-5xl lg:text-6xl">
            Red liv med vores kursus
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#40546a] md:text-lg">
            Lad os sammen skræddersy kurset til jeres behov. Vi sikrer, at du
            får den mest relevante og effektive træning.
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 text-[#40546a] md:text-lg">
            Som en del af kurset modtager du også et komplet forblødningskit,
            der indeholder alt det nødvendige udstyr til at håndtere alvorlige
            blødninger.
          </p>

          <div className="mt-8 inline-flex border border-[#30445a]/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#c92736]">
            Start pris 8.500 DKK eks. moms
          </div>
        </div>

        <div className="relative">
          <Image
            src="/cours.jpg"
            alt="Stop Blødning kursus"
            width={900}
            height={600}
            priority
            className="h-[420px] w-full object-cover shadow-2xl md:h-[520px]"
          />

          <div className="absolute -bottom-8 left-6 max-w-sm bg-white/90 p-6 shadow-xl backdrop-blur md:left-10">
            <p className="text-2xl font-bold leading-tight text-[#c92736]">
              Investér i “STOP BLØDNING” kurset i dag, og bliv en livredder i
              morgen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
