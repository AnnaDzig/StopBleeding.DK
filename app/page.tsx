import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MissionVisionSection from "@/components/MissionVisionSection";
import ServicesSection from "@/components/ServicesSection";
import VideoTextSection from "@/components/VideoTextSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MissionSection />
      <MissionVisionSection />
      <ServicesSection />
      <VideoTextSection
        title="Professionel Træning"
        text="Få værdifulde færdigheder og selvtillid i håndtering af alvorlige blødningssituationer med vores professionelle uddannelsesydelser..."
        videoSrc="/training.mp4"
      />
      <VideoTextSection
        title="Løsninger til Håndtering af Blødning"
        text="Vores blødningskontrolsæt er sammensat til at give dig de nødvendige værktøjer..."
        videoSrc="/bleeding-control.mp4"
        reverse
      />
      <CoreValuesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
