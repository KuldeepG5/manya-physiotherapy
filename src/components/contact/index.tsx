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
                <p className="text-base">{appConfig.location}</p>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4 pb-4 justify-start">
                <Phone className="contact-icon" />
                <span className="max-w-sm">
                  <h1 className="text-yellow-500 text-xl">Contact:</h1>
                  <a
                    href={`tel:+${appConfig.contact}`}
                    className="text-base hover:underline block"
                  >
                    {appConfig.contact}
                  </a>
                  <a
                    href={`tel:+${appConfig.mobile}`}
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
        <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-lg h-[400px] group">
          <div className="absolute inset-0 flex-center hidden group-hover:flex hover:bg-black/30 transition-all duration-500 fade-in">
            <a 
            href={appConfig.googleMapLocation}
            target="_blank"
            className="px-4 py-2 rounded-xl group shadow flex-center gap-2 hover:bg-main hover:text-white bg-white transition-all duration-500 fade-in"
            >
             Open in Google Maps
             <MapPin className="icon text-black group-hover:text-white" />
            </a>
          </div>
          <iframe
            title="Manya Physiotherapy Location"
            src="https://www.google.com/maps?q=97,+Rajeev+Bihar,+Naubasta,+Kanpur,+UP&z=15&output=embed"
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
