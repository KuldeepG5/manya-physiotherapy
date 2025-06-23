// components/Specialities.tsx
import { motion } from "framer-motion";
import { useRef } from "react";

const specialties = [
  {
    title: "Rehab Care",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    title: "Joint Mobility",
    image:
      "https://img.freepik.com/free-photo/muscular-man-squeezing-biceps_1048-2641.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    title: "Sports Injury",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    title: "Back Pain",
    image:
      "https://img.freepik.com/free-photo/muscular-man-squeezing-biceps_1048-2641.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    title: "Posture Correction",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    title: "Tele Physio",
    image:
      "https://img.freepik.com/free-photo/muscular-man-squeezing-biceps_1048-2641.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
  },
  {
    title: "Strength Training",
    image:
      "https://img.freepik.com/free-photo/muscular-man-running_1048-2376.jpg?ga=GA1.1.1267587208.1687781140&semt=ais_hybrid&w=740",
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
          Manya Physiotherapy offers expert physiotherapy treatments across
          multiple specialties. Contact us to check the availability of
          physiotherapists near you.
        </p>
      </div>

      <InfiniteScroll data={specialties} />
    </section>
  );
};

export default Specialities;
