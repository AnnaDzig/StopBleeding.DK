import CoreValueCard from "@/components/CoreValueCard";

export default function CoreValuesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-xl md:text-2xl font-bold text-[#BE2D37] mb-6">
        STOP BLØDNING DANMARKS KERNEVÆRDIER ER:
      </h2>

      {/* Main Flex Container */}
      <div className="flex grow h-[800px] gap-6">
        {/* Left Side (Tryghed) - Large Image */}
        <div className="w-1/2  self-center">
          <CoreValueCard
            title="Tryghed:"
            text="Vi arbejder for at skabe sikre miljøer ved at sikre, at det rette udstyr og den rette viden er til stede..."
            imageSrc="/tryghed.png"
          />
        </div>

        {/* Right Side (Stacked Images) */}
        <div className="w-1/2 flex flex-col gap-6">
          <CoreValueCard
            title="Forebyggelse:"
            text="Vi stræber efter at gøre vores udstyr og kurser tilgængelige for alle..."
            imageSrc="/forebyggelse.png"
          />
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
