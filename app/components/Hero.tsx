import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center px-6">
        <p className="text-white text-4xl uppercase md:text-6xl font-bold font-poppins">
          Stop Blødning Danmark
        </p>
        <p className="text-white text-2xl mt-4 max-w-2xl mx-auto font-poppins">
          Dedikeret til at øge bevidstheden om hjælp ved akutte
          blødningssituationer
        </p>
        <div className="flex items-center justify-center mt-6">
          <Link
            href="/courses"
            className="rounded-lg bg-[#BE2D37] px-6 py-3 text-lg text-white transition hover:bg-red-600">
            Hvem er vi?
          </Link>
        </div>
      </div>
    </section>
  );
}
