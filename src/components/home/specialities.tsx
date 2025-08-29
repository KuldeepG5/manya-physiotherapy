// components/Specialities.tsx
import { motion } from "framer-motion";
import { useRef } from "react";

const specialties = [
  {
    title: "Rehab Care",
    image:
      "/rehab care.jpg",
  },
  {
    title: "Muscle and Joint mobility ",
    image:
      "/muscle and joint mobility.jpg",
  },
  {
    title: "Sports Injury",
    image:
      "/sports injury 2.jpg",
  },
  {
    title: "Neurological conditions",
    image:
      "/neurological condition.jpg",
  },
  {
    title: "Posture Correction",
    image:
      "/postural correction.jpg",
  },
  {
    title: "Tele physiotherapy",
    image:
      "/tele physiotherapy.jpg",
  },
  {
    title: "Strength Training",
    image:
      "/Strength-Training.jpg",
  },
   {
    title: "back pain",
    image:
      "/back pain 2.jpg",
  },
];

const InfiniteScroll = ({ data }: { data: typeof specialties }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate items to ensure full seamless loop
  const fullList = [...data, ...data];

  return (
    <div className="overflow-hidden py-10">
      <motion.div
        ref={containerRef}
        className="flex gap-12 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {fullList.map((item, index) => (
          <div
            key={index}
            className={`min-w-[200px] flex-shrink-0 ${index % 2 === 0 ? 'mt-8' : 'mb-8'}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover rounded-md mb-6 shadow-xl"
            />
            <h2 className="text-lg font-bold text-center text-main">{item.title}</h2>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Specialities = () => {
  return (
    <section className="page-container py-20 bg-light text-center">
      <div className="px-3 lg:page-x-padding mb-8">
        <h1 className="text-main mb-4">Our Specialities</h1>
        <p className="max-w-3xl mx-auto">
         Manya Physiotherapy offers expert physiotherapy treatments across multiple specialties. Contact us to check the availability of physiotherapists in Kanpur 
        </p>
      </div>

      <InfiniteScroll data={specialties} />
    </section>
  );
};

export default Specialities;
