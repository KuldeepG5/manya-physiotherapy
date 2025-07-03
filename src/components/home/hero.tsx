import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CustomButton } from "../common";
import { useNavigate } from "react-router-dom";
import { LucideMessageCircle } from "lucide-react";
import { appConfig } from "@/constants/app-config";

const Hero = () => {
  const images = ["/hero-bg-1.jpg", "/hero-bg-2.jpg", "/hero-bg-3.jpg"];

  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const handleWhatsappClick = () => {
    window.open(appConfig.whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 bg-transparent text-white px-3 z-20 grid place-content-center gap-6 mx-auto max-w-4xl text-center">
        <h1 className="">Reclaim Your Strength with Manya Physiotherapy</h1>
        <h2 className="text-gray-200">
          Revolutionizing physiotherapy through intelligent diagnostics and
          tailored treatment plans — providing effective pain relief and
          mobility care across Clinics, Homes, and Video Consultation.
        </h2>
        <div className="flex-center flex-wrap gap-12 mt-12">
          <button
            onClick={handleWhatsappClick}
            rel="noopener noreferrer"
            className="relative overflow-hidden group hover-shadow bg-white"
          >
            <div className="absolute w-full h-full -translate-x-full z-10 bg-green-500 top-0 left-0 group-hover:translate-x-0 transition-all duration-500 rounded-full" />
            <p className="z-20 group-hover:text-white">
              Contact us on Whatsapp
            </p>
            <span className="z-20 bg-green-500 group-hover:bg-white">
              <LucideMessageCircle className="icon group-hover:text-green-500" />
            </span>
          </button>

          <CustomButton
            title="Request Callback"
            onClick={() => navigate("/contact")}
          />
        </div>
      </div>
      <img
        src={images[prevIndex]}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Previous Background"
      />
      <motion.img
        key={images[index]}
        src={images[index]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Hero Background"
      />
    </section>
  );
};

export default Hero;
