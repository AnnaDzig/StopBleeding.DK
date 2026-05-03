import Card from "@/components/Card";
import { Users, HeartPulse } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-6">
      {/* Mission Card (Red Background) */}
      <Card
        title="Mission"
        text="At redde liv ved at udruste erhverv, skoler og institutioner med specialudstyr og kurser, der effektivt stopper akutte og kraftige blødninger. Vores mål er at skabe sikre miljøer, hvor livreddende førstehjælpsudstyr og nødvendig viden til at anvende det er tilgængeligt, som hjertestartere. Vi fokuserer på uddannelse i førstehjælp, der kan stoppe alvorlige blødninger og gøre vores udstyr og kurser tilgængelige for alle."
        icon={<Users className="text-white w-10 h-10" />}
        background="bg-red-600"
      />

      {/* Vision Card (White Background) */}
      <Card
        title="Vision"
        text="Blive den førende leverandør af kurser og udstyrspakker inden for håndtering af akutte blødninger i hele Danmark. Vi stræber efter at skabe et samfund, hvor alle erhverv, skoler og institutioner er udstyret med de nødvendige redskaber og viden til at reagere effektivt på blødningsnødsituationer. Vores kursus og salg af kits skal være en fast del af uddannelsespakker og onboardingprogrammer i store virksomheder, uddannelsesinstitutioner og sportsforeninger."
        icon={<HeartPulse className="text-secondary w-10 h-10" />}
      />
    </section>
  );
}
