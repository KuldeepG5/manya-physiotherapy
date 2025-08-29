// components/InfiniteScroll.tsx
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  clinicImage2,
  treatmentRoom,
  clinicImage5,
  office,
  maleRoom,
  femeleRoom,
  gallary,
  hall,
} from "@/content/our-clinic-content";

export const specialties = [
  {
    title: " ",
    image: clinicImage5,
  },
  {
    title: " ",
    image: office,
  },
  {
    title: " ",
    image: treatmentRoom,
  },
  {
    title: " ",
    image: maleRoom,
  },
  {
    title: " ",
    image: hall,
  },
  {
    title: " ",
    image: femeleRoom,
  },
  {
    title: " ",
    image: gallary,
  },
  {
    title: " ",
    image: clinicImage2,
  },
];

const InfiniteScroll = ({ data }: { data: typeof specialties }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fullList = [...data, ...data]; // For seamless loop

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
            className={`min-w-[200px] flex-shrink-0 ${
              index % 2 === 0 ? "mt-8" : "mb-8"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover rounded-md mb-4 shadow-xl"
            />
            <h2 className="text-lg font-bold text-center text-main">
              {item.title}
            </h2>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
