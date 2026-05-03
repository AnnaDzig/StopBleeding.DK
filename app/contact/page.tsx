import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const address = "Jyllandsgade 19A, 7000 Fredericia";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address,
  )}`;
  return (
    <>
      <section
        className="relative  text-white py-30 text-center"
        //className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/kurs_section.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <Header />
        <h1 className="text-4xl font-bold mb-2">Vores kontakter.</h1>
      </section>

      <section className=" text-white py-12 px-6 bg-[#BE2D37]">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-3  text-center border-t border-b border-white">
          {/* Phone */}
          <div className="py-8 border-b md:border-b-0 md:border-r border-white">
            <div className="flex justify-center mb-4 text-4xl">
              <FaPhone />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Phone Number</h3>
            <p>(+45) 2624 0246</p>
          </div>

          {/* Location */}
          <div className="py-8 border-b md:border-b-0 md:border-r border-white">
            <div className="flex justify-center mb-4 text-4xl">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Location</h3>
            <p>Jyllandsgade 19A</p>
            <p>7000 Fredericia</p>
          </div>

          {/* Email */}
          <div className="py-8">
            <div className="flex justify-center mb-4 text-4xl">
              <FaEnvelope />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Send Message</h3>
            <p>kk@stopblodning.dk</p>
          </div>
        </div>
        <div className=" bg- mt-14 grid gap-8 rounded-3xl bg- shadow-xl lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col justify-center p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Find os
            </p>

            <h2 className="mb-4 text-3xl font-bold text-light-gray">
              Besøg os i Fredericia
            </h2>

            <p className="mb-6 text-gray">
              Du kan finde os på Jyllandsgade 19A, 7000 Fredericia. Klik på
              knappen for at åbne adressen direkte i Google Maps.
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90">
              <FaMapMarkerAlt />
              Åbn i Google Maps
            </a>
          </div>
          <div className="h-[360px] lg:h-[460px]">
            <iframe
              title="Google Maps location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                address,
              )}&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
