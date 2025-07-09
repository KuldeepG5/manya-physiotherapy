import { appConfig } from "@/constants/app-config";
import { MapPin, PhoneCall } from "lucide-react";
import InfiniteScroll, { specialties } from "./clinic-scrolling-image";
const OurClinic = () => {
  return (
    <section className="page-container py-20 bg-light text-center">
      <h1 className="text-main text-center mb-12">
        Advance Physiotherapy Clinic
      </h1>

      <p className="max-w-3xl mx-auto text-center mb-8">
        Whether you prefer in-clinic sessions or physiotherapy at home, our
        thoroughly vetted and licensed Physiotherapists and Chiropractors are
        committed to delivering the highest standard of care.
      </p>

      <div className="max-w-4xl mx-auto text-gray-800">
        <h2 className="text-2xl font-semibold uppercase text-center mb-6">
          Manya Physiotherapy Clinic
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start gap-2">
              <p>Rating:</p> ⭐⭐⭐⭐⭐ <span className="font-bold">5.0</span>
            </div>
            <p>Opening Hours - 11am to 7pm</p>
          </div>
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center gap-2">
              <MapPin className="w-5 h-5 text-main" />
              <p>{appConfig.location}</p>
            </div>

            <div className="flex justify-center sm:justify-start items-center gap-2">
              <PhoneCall className="w-5 h-5 text-main" />
              <p>{appConfig.contact}</p>
            </div>
          </div>
        </div>
      </div>

      <InfiniteScroll data={specialties} />
    </section>
  );
};

export default OurClinic;
