import CoreValueCard from "@/components/CoreValueCard";

export default function CoreValuesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-xl md:text-2xl font-bold text-[#BE2D37] mb-6">
        STOP BLØDNING DANMARKS KERNEVÆRDIER ER:
      </h2>

      <div className="grid gap-6 lg:grid-cols-2 lg:grid-rows-2 lg:h-[720px]">
        <div className="h-[320px] md:h-[400px] lg:row-span-2 lg:h-full">
          <CoreValueCard
            title="Tryghed:"
            text="Vi arbejder for at skabe sikre miljøer ved at sikre, at det rette udstyr og den rette viden er til stede..."
            imageSrc="/tryghed.png"
          />
        </div>

        <div className="h-[320px] md:h-[340px] lg:h-full">
          <CoreValueCard
            title="Forebyggelse:"
            text="Vi stræber efter at gøre vores udstyr og kurser tilgængelige for alle..."
            imageSrc="/forebyggelse.png"
          />
        </div>

        <div className="h-[320px] md:h-[340px] lg:h-full">
          <CoreValueCard
            title="Uddannelse"
            text="Vores produkter er af højeste kvalitet, og vores uddannelsesprogrammer er grundige og effektive..."
            imageSrc="/uddannelse.png"
          />
        </div>
      </div>
    </section>
  );
}
