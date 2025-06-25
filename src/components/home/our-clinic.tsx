import { appConfig } from "@/constants/app-config";
import { MapPin, PhoneCall } from "lucide-react";

const OurClinic = () => {
  return (
    <section className="section-container">
      <h1 className="text-main text-center mb-12">
        Advance Physiotherapy Clinics
      </h1>
      <p className="max-w-3xl mx-auto">
        Whether you prefer in-clinic sessions or physiotherapy at home, our
        thoroughly vetted and licensed Physiotherapists and Chiropractors are
        committed to delivering the highest standard of care.
      </p>
      <div className="grid sm:grid-cols-5 bg-main rounded-4xl mt-16 overflow-hidden shadow-xl shadow-light">
      <img src="/manya-physiotherapy.jpeg" className="w-full h-full object-cover sm:col-span-2" />
        <div className="p-8 sm:col-span-3 text-white">
          <h2 className="text-3xl uppercase mb-4">Manya Physiotherapy Clinic</h2>
          <span className="flex-center justify-start gap-2">
            ⭐⭐⭐⭐⭐
            <p className="font-bold">5.0</p>
          </span>
          <p className="mb-2">Manya physiotherapy clinic</p>
          <div className="flex justify-start gap-2 mb-3">
            <MapPin className="icon" />
            <p>{appConfig.location}</p>
          </div>
          <div className="flex justify-start gap-2 mb-3">
            <PhoneCall className="icon" />
            <p>{appConfig.contact}</p>
          </div>
          <p className="mb-2">Opening Hours - 11am to 7pm</p>
        </div>
      </div>
    </section>
  );
};

export default OurClinic;
