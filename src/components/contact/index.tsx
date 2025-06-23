import { appConfig } from "@/constants/app-config";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="flex items-center justify-center bg-white relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-14 p-6 w-full max-w-screen-xl">
        {/* Contact Info */}
        <div className="flex items-center justify-start h-full">
          <div className="rounded-3xl p-12 w-full max-w-xl space-y-8">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>

            <div className="flex items-center gap-4 pb-4 justify-start">
              <MapPin className="contact-icon" />
              <span className="max-w-sm">
                <h1 className="text-yellow-500 text-xl">Address:</h1>
                <p className="text-base">
                  {appConfig.location}
                </p>
              </span>
            </div>

           <div className="grid grid-cols-2 gap-8">
             <div className="flex items-center gap-4 pb-4 justify-start">
              <Phone className="contact-icon" />
              <span className="max-w-sm">
                <h1 className="text-yellow-500 text-xl">Contact:</h1>
                <a
                  href={`tel:+${appConfig.contact}`}
                  className="text-base hover:underline"
                >
                 {appConfig.contact}
                </a>
              </span>
            </div>

            <div className="flex items-center gap-4 pb-4 justify-start">
              <Mail className="contact-icon" />
              <span className="max-w-sm">
                <h1 className="text-yellow-500 text-xl">Email:</h1>
                <a
                  href={`mailto:${appConfig.gmail}`}
                  className="text-base hover:underline"
                >
                  {appConfig.gmail}
                </a>
              </span>
            </div>

            <div className="flex items-center gap-4 pb-4 justify-start">
              <Globe className="contact-icon" />
              <span className="max-w-sm">
                <h1 className="text-yellow-500 text-xl">Website:</h1>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:underline"
                >
                  www.manyaphysiotherapy.com
                </a>
              </span>
            </div>
           </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-lg h-[400px]">
          <iframe
            title="Jayash Silver Location"
            src="https://www.google.com/maps?q=26.4611,80.3507&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;