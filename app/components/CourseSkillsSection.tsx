import Image from "next/image";

const skills = [
  {
    title: "Kendskab til forskellige typer sår og korrekt håndtering",
    text: "Du lærer at genkende forskellige typer sår, fx snit, stik og revner, og vælge den mest hensigtsmæssige måde at håndtere dem på.",
  },
  {
    title: "Evnen til hurtigt at identificere og stoppe alvorlige blødninger",
    text: "Du får praktisk erfaring med at genkende alvorlige blødninger og anvende teknikker, der kan hjælpe med at standse dem effektivt.",
  },
  {
    title: "Brug af specialudstyr som tourniquets og hæmostatiske forbindinger",
    text: "Du bliver fortrolig med førstehjælpsudstyr, der kan være afgørende, når en blødning skal kontrolleres hurtigt og sikkert.",
  },
  {
    title: "Vurdering og prioritering af flere skader i en nødsituation",
    text: "Du lærer at skabe overblik, vurdere flere skader på én gang og prioritere den indsats, der kan gøre størst forskel.",
  },
  {
    title: "Ro, overblik og psykologisk støtte til tilskadekomne",
    text: "Du træner i at bevare roen under pres og støtte den tilskadekomne, indtil professionel hjælp når frem.",
  },
  {
    title: "Praktisk førstehjælp til både ekstreme og dagligdags situationer",
    text: "Du får brugbar førstehjælpsviden, som kan anvendes både ved alvorlige hændelser og ved mindre ulykker i hverdagen.",
  },
  {
    title: "Sikkerhed og korrekt brug af personlige værnemidler",
    text: "Du lærer, hvordan du beskytter både dig selv og andre ved at bruge personlige værnemidler korrekt.",
  },
];

export default function CourseSkillsSection() {
  return (
    <section className="relative overflow-hidden bg-[#eef3f4] px-6 py-20 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center opacity-15" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative hidden lg:block">
          <div className="sticky top-28 overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/case.jpg"
              alt="Stop Blødning førstehjælpskasse"
              width={700}
              height={900}
              className="h-[760px] w-full object-cover"
            />
          </div>

          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/3 w-[60%] rounded-lg bg-[#c92736] p-8 text-lg font-medium leading-snug text-white shadow-xl">
            Disse kompetencer er ikke kun nyttige i ekstreme nødsituationer, men
            også i hverdagen, hvor hurtig førstehjælp kan være afgørende.
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c92736]">
            Kompetencer
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#30445a] md:text-4xl">
            Hvilke kompetencer får du fra kurset?
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-[#40546a]">
            Når du har gennemført “STOP BLØDNING”-kurset, står du med konkrete
            og brugbare færdigheder, som kan gøre en afgørende forskel i en akut
            situation.
          </p>

          <div className="mt-10 space-y-5">
            {skills.map((skill) => (
              <article
                key={skill.title}
                className="rounded-lg bg-white/90 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#c92736] text-2xl font-bold text-white">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-lg font-bold leading-8 text-[#30445a] md:text-xl">
                      {skill.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#56677a]">
                      {skill.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
