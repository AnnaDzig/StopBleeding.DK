import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <section
        className="relative bg-primary  text-white py-30 text-center bg-center w-full h-[90%]"
        //className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/kurs_section.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <Header />
        <h1 className="text-4xl font-bold mb-2">Vores kontakter.</h1>
      </section>

      <section className="bg-primary text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center border-t border-b border-white">
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
      </section>

      <Footer />
    </>
  );
}
