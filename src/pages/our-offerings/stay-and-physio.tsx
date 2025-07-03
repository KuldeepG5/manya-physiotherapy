import { Banner, Footer, Header } from "@/components/common";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1], // cubic bezier easing
    },
  },
};

const StayAndPhysiotherapy = () => {
  return (
    <main className="page-container text-gray-800">
      <Header />
      <Banner title="Full-Stay and Physiotherapy" />

      <section className="section-container px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            {index === 0 && (
              <div className="text-center">
                <h2 className="text-4xl font-bold text-main mb-4">
                  Welcome to Manya Physiotherapy Clinic
                </h2>
                <div className="grid sm:grid-cols-2 place-content-center">
                  <p className="text-lg text-gray-600">
                    Experience holistic healing and comfort with our integrated
                    stay and physiotherapy services.
                  </p>
                  <img
                    src="/reception.jpg"
                    className="h-full w-full object cover"
                  />
                </div>
              </div>
            )}

            {index === 1 && (
              <>
                <div className="grid sm:grid-cols-2 place-content-center gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-main mb-3">
                      Stay & Heal in Comfort
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We offer modern stay facilities for patients who need
                      continuous care and treatment. Perfect for those traveling
                      from afar or undergoing long-term rehabilitation, our
                      accommodations are safe, clean, and comfortable.
                    </p>
                  </div>
                  <img
                    src="/room-1.jpg"
                    className="h-full w-full object cover"
                  />
                  <img
                    src="/room-2.jpg"
                    className="h-full w-full object cover"
                  />
                  <img
                    src="/room-3.jpg"
                    className="h-full w-full object cover"
                  />
                </div>
              </>
            )}

            {index === 2 && (
              <>
                <div className="grid sm:grid-cols-2 place-content-center gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-main mb-3">
                      Comprehensive Physiotherapy Treatments
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Our experienced therapists offer personalized treatments
                      for a wide range of conditions:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                      <li>Post-surgical rehabilitation</li>
                      <li>Stroke and neurological recovery</li>
                      <li>Sports injury therapy</li>
                      <li>Back and joint pain management</li>
                      <li>Customized fitness and mobility programs</li>
                    </ul>
                  </div>
                  <img
                    src="/room-4.jpg"
                    className="h-full w-full object cover"
                  />
                </div>
              </>
            )}

            {index === 3 && (
              <>
                <div className="grid sm:grid-cols-2 place-content-center gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-main mb-3">
                      Why Choose Manya?
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                      <li>Compassionate and certified physiotherapists</li>
                      <li>On-site stay facilities with 24/7 support</li>
                      <li>State-of-the-art equipment and clean environment</li>
                      <li>Personalized treatment plans for every patient</li>
                    </ul>
                  </div>
                  <img
                    src="/room-5.jpg"
                    className="h-full w-full object cover"
                  />
                </div>
              </>
            )}
          </motion.div>
        ))}
      </section>

      <Footer />
    </main>
  );
};

export default StayAndPhysiotherapy;
