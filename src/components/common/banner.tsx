import { motion } from "framer-motion";

const Banner = ({title} : {title: string}) => {
  return (
    <div
      className="w-full h-[400px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(/hero-bg-2.jpg)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-transparent flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-800 text-5xl font-bold"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
};

export default Banner;
