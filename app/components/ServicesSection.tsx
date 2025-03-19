import ImageCard from "@/components/ImageCard";

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-6">
      {/* Card 1: Schools & Institutions */}
      <ImageCard
        title="Skoler og Institutioner"
        text="Vi tilbyder skoler og institutioner skræddersyede løsninger med abonnementsbaseret service, der sikrer opdaterede forblødningskits og omfattende træningskurser."
        imageSrc="/cours.jpg"
        altText="School Training"
      />

      {/* Card 2: Business Solutions */}
      <ImageCard
        title="Erhverv"
        text="Til erhvervsvirksomheder leverer vi specialiserede træningsprogrammer og abonnementsløsninger, der garanterer, at forblødningskits er altid opdaterede og klar til brug, hvilket bidrager til et sikkert arbejdsmiljø."
        imageSrc="/business-training.png"
        altText="Business Training"
      />

      {/* Card 3: Public Transport */}
      <ImageCard
        title="Offentlig Transport"
        text="Vores løsninger for offentlig transport omfatter installation af forblødningskits og skræddersyede træningskurser til personalet, med fokus på hurtig adgang til livreddende hjælp i nødsituationer på vejene, i og uden for byerne."
        imageSrc="/transport-kit.jpg"
        altText="Transport Kit"
      />
    </section>
  );
}
