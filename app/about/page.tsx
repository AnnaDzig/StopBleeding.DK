import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import {
  faUserTie,
  faUserShield,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <div className="bg-[#34495E] text-white">
      <Header />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold">Hvem er vi?</h1>
        <p className="mt-4 text-lg leading-relaxed">
          Vi er et innovativt hold, som har sat os for at udbrede kendskabet til
          hjælp ved akutte forblødningssituationer. For langt de fleste danskere
          er førstehjælp og hjertestartere blevet en del af vores bevidsthed...
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <TeamMemberCard
          name="Kenneth"
          role="Administrerende direktør"
          image="/kennet.jpg"
          icon={faUserTie}
          delay={0.2}
        />
        <TeamMemberCard
          name="Olivier"
          role="Kursusleder"
          image="/olivier.jpg"
          icon={faUserShield}
          delay={0.4}
        />
        <TeamMemberCard
          name="Niels"
          role="Marketingansvarlig"
          image="/niels.jpg"
          icon={faUserTag}
          delay={0.6}
        />
      </section>
      <Footer />
    </div>
  );
}
