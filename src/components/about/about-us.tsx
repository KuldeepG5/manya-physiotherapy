import React from "react";
import { motion } from "framer-motion";
import { aboutUsContent, founder, officeImage1 } from "./about-data";
import Banner from "../common/banner";
import { certificateImages } from "./about-data";
const AboutUs: React.FC = () => {
  return (
    <div className="w-full">
      <Banner title="About us" />

      <section className="bg-gradient-to-r from-white via-gray-50 to-white py-16 px-4 md:px-20">
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {aboutUsContent.welcomeToJayas}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {aboutUsContent.aboutUs1}
              <br />
              <br />
              {aboutUsContent.aboutUs2}
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={officeImage1}
              alt="Manya Physiotherapy"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-light py-16 px-4 md:px-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {aboutUsContent.ourPhilosophy}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {aboutUsContent.ourPhilosophy1}
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-16 px-4 md:px-20">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {aboutUsContent.whyChooseJayas}
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg list-disc list-inside">
            <li>
              <span className="font-semibold">
                {aboutUsContent.whyChooseJayasHeading1}
              </span>{" "}
              {aboutUsContent.whyChooseJayasAnswer1}
            </li>
            <li>
              <span className="font-semibold">
                {aboutUsContent.whyChooseJayasHeading2}
              </span>{" "}
              {aboutUsContent.whyChooseJayasAnswer2}
            </li>
            <li>
              <span className="font-semibold">
                {aboutUsContent.whyChooseJayasHeading3}
              </span>{" "}
              {aboutUsContent.whyChooseJayasAnswer3}
            </li>
            <li>
              <span className="font-semibold">
                {aboutUsContent.whyChoosejayasHeading4}
              </span>
              {aboutUsContent.whyChooseJayasAnswer4}
            </li>
          </ul>
        </motion.div>
      </section>

      <section className="py-16 px-4 md:px-20 bg-light">
        <motion.div
          className="grid sm:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={founder}
              alt="Manya Physiotherapy"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
         <motion.div
  initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-bold text-gray-800 mb-4">
    {aboutUsContent.meetOurFounder}
  </h2>

  <p className="text-gray-600 text-lg leading-relaxed mb-4">
    <strong>Dr. Kuldeep Gupta (PT)</strong>, the visionary behind{" "}
    <strong>Manya Physiotherapy Clinic</strong>, is a licensed physiotherapist
    with a deep commitment to patient wellness and recovery.
  </p>

  <p className="text-gray-600 text-lg leading-relaxed mb-4">
    He completed his{" "}
    <strong>
      Master of Physiotherapy (MPT) in 2009 from Rajiv Gandhi University of
      Medical Sciences (RGUHS), Bangalore
    </strong>{" "}
    and has years of hands-on experience. He has worked with renowned
    institutions including Jehangir Apollo Hospital (Pune), Sager Apollo
    Hospital (Bangalore), Hosmat Hospital (Bangalore), Vydehi Medical College
    (Bangalore), and Manipal Hospital (Bangalore).
  </p>

  <p className="text-gray-600 text-lg leading-relaxed mb-4">
    Dr. Gupta has also completed a{" "}
    <strong>
      Fellowship in Advanced NeuroMyoSkeletal Techniques (Mumbai)
    </strong>
    , where he gained advanced expertise in treating TMJ, foot problems,
    migraines, spinal issues, joint arthritis, shoulder conditions, and
    biomechanical imbalances of the body.
  </p>

  <p className="text-gray-600 text-lg leading-relaxed mb-4">
    Throughout his career, he has pursued numerous{" "}
    <strong>advanced certified courses</strong> in physiotherapy and healthcare,
    including Advance Manual Therapy, Neuro Development Therapy (NDT), K-CAT,
    D-CAT, Dry Needling, Cupping Therapy, Advanced Foot Rehab, Myofascial
    Release, Janda Approach for Shoulder Complex, Therapeutic Taping, and
    multiple Continuing Medical Education (CME) programs.
  </p>

  <p className="text-gray-600 text-lg leading-relaxed mb-4">
    He has successfully treated a wide range of musculoskeletal, neurological,
    and biomechanical conditions. Dr. Gupta’s goal is to provide
    high-quality, affordable physiotherapy services that help individuals regain
    mobility, relieve pain, and return to their daily activities with
    confidence.
  </p>

  <p className="text-gray-600 text-lg leading-relaxed">
    His compassionate approach, clinical expertise, and focus on long-term
    healing have made <strong>Manya Physiotherapy Clinic</strong> a trusted name
    in the community—built on a foundation of care, trust, and excellence in
    physiotherapy and rehabilitation.
  </p>
</motion.div>

        </motion.div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-10">
          Certificates
        </h2>
        <div className="mt-10 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificateImages.map((src) => (
            <img
              key={src + Math.random()}
              src={src}
              alt="Certificate"
              className="h-full w-full object-cover pointer-events-none"
              draggable={false}
            />
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-20">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {aboutUsContent.visitUs}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>{aboutUsContent.visitUs1}</strong>
            {aboutUsContent.visitUs2}
            <br />
            {aboutUsContent.visitUs3}
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
