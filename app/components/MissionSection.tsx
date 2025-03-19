import AnimatedHeading from "@/components/AnimatedHeading";

export default function MissionStatement() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:py-20 flex flex-col lg:flex-row items-center lg:items-start gap-8">
      {/* Left Side: Red Line + Animated Heading */}
      <div className="w-full lg:w-1/3 flex flex-col items-start ">
        <AnimatedHeading text="Mission Statement" />
      </div>

      {/* Right Side: Description */}
      <p className="w-full lg:w-2/3 text-lg text-gray-600 leading-relaxed">
        Stop Blødning Danmark er dedikeret til at redde liv ved at udstyre
        virksomheder, skoler og institutioner i Danmark med specialiseret udstyr
        og uddannelse i førstehjælp til akutte blødningssituationer. Vores mål
        er at skabe trygge miljøer, hvor livreddende udstyr og viden er lige så
        almindeligt tilgængeligt som hjertestartere. Vi stræber efter at blive
        den førende leverandør af kurser og udstyr til håndtering af akutte
        blødninger, og vores kerneværdier – tryghed, forebyggelse og uddannelse
        – sikrer, at vores kunder altid kan stole på vores ekspertise. Vores
        professionelle og venlige tilgang gør os til en betroet partner, der
        arbejder for at skabe sikre og beredte fællesskaber i hele Danmark.
      </p>
    </section>
  );
}
