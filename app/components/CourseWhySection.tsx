import Image from "next/image";

export default function CourseWhySection() {
  return (
    <section className="bg-[#eef3f4] px-6 py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden shadow-xl">
          <Image
            src="/class.jpg"
            alt="Undervisning"
            width={700}
            height={900}
            className="h-[520px] w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="bg-white p-8 shadow-xl md:p-12">
          <h2 className="text-3xl font-bold uppercase text-[#30445a] md:text-4xl">
            Hvorfor lære det?
          </h2>

          <p className="mt-6 leading-8 text-[#40546a]">
            I nødsituationer kan hurtig og korrekt handling betyde forskellen
            mellem liv og død. “STOP BLØDNING”-kurset er designet til at udstyre
            dig med livsvigtige færdigheder til at håndtere alvorlige
            blødninger.
          </p>

          <p className="mt-4 leading-8 text-[#40546a]">
            Ulykker sker uventet, og ved at tage dette kursus bliver du en
            værdifuld ressource — uanset hvor du er. Du vil være i stand til at
            yde førstehjælp og stabilisere en person, indtil professionel hjælp
            ankommer.
          </p>
        </div>
      </div>
    </section>
  );
}
