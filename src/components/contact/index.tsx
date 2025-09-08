import { appConfig } from "@/constants/app-config";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import ContactForm from "./contact-form/contact-form";// ✅ reusable form
import { Toaster } from "react-hot-toast";

const ContactUs = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto p-6 space-y-12">
        
        <div className="bg-gray-50 rounded-3xl p-8 shadow-md space-y-8">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          
          <div className="flex items-center gap-4 pb-4">
            <MapPin className="contact-icon" />
            <div>
              <h1 className="text-yellow-500 text-xl">Address:</h1>
              <p className="text-base">{appConfig.location}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <Phone className="contact-icon" />
              <div>
                <h1 className="text-yellow-500 text-xl">Contact:</h1>
                <a
                  href={`tel:+${appConfig.contact}`}
                  className="text-base hover:underline block"
                >
                  {appConfig.contact}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="contact-icon" />
              <div>
                <h1 className="text-yellow-500 text-xl">Email:</h1>
                <a
                  href={`mailto:${appConfig.gmail}`}
                  className="text-base hover:underline"
                >
                  {appConfig.gmail}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Globe className="contact-icon" />
              <div>
                <h1 className="text-yellow-500 text-xl">Website:</h1>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:underline"
                >
                  www.manyaphysiotherapy.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
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
          <div className="w-full rounded-2xl  ">
            <ContactForm />
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default ContactUs;
